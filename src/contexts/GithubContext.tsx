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
}

interface GithubProviderProps {
  children: ReactNode;
}

export const GithubContext = createContext({} as GithubContextType);

export function GithubProvider({ children }: GithubProviderProps) {
  const [posts, setPosts] = useState<PostCardProps[]>([]);
  

  const fetchPosts = useCallback(async () => {
    const response = await issues.get("github-blog/issues");
    setPosts(response.data);
  }, []);

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <GithubContext.Provider value={{ posts }}>
      {children}
    </GithubContext.Provider>
  );
}
