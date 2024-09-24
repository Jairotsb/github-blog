import {
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import { PostCardProps } from "../types";
import { issues } from "../api";
import { createContext } from "use-context-selector";

interface GithubContextType {
  posts: PostCardProps[];
  searchPosts: (query: string) => void;
}

interface GithubProviderProps {
  children: ReactNode;
}

export const GithubContext = createContext({} as GithubContextType);

export function GithubProvider({ children }: GithubProviderProps) {
  const [posts, setPosts] = useState<PostCardProps[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<PostCardProps[]>([]);
  

  const fetchPosts = useCallback(async () => {
    const response = await issues.get("github-blog/issues");
    setPosts(response.data);
    setFilteredPosts(response.data);
  }, []);

  const searchPosts = useCallback((query: string) => {
    const filtered = posts.filter(post => 
      post.title.toLowerCase().includes(query.toLowerCase())
    )
    setFilteredPosts(filtered)
  }, [posts])

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <GithubContext.Provider value={{ posts: filteredPosts, searchPosts }}>
      {children}
    </GithubContext.Provider>
  );
}
