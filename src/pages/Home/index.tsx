import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";

import { PostListCard, PostListContainer } from "./styles";
import { PostCard } from "../../components/PostCard";
import { useContextSelector } from "use-context-selector";
import { GithubContext } from "../../contexts/GithubContext";

export function Home() {
  const posts = useContextSelector(GithubContext, (context) => {
    return context.posts;
  });
  const searchPosts = useContextSelector(GithubContext, (context) =>  context.searchPosts )

  return (
    <>
      <Header />
      <SearchForm onSearch={searchPosts}/>

      <PostListContainer>
        <PostListCard>
          {posts.length > 0 ? (
            posts.map((post) => (
              <PostCard
                key={post.id}
                number={post.number}
                title={post.title}
                body={post.body}
                created_at={post.created_at}
                comments={post.comments}
                user={{
                  login: post.user.login,
                }}
              />
            ))
          ) : (
            <p>Ainda não há nada por aqui... 😔</p>
          )}
        </PostListCard>
      </PostListContainer>
    </>
  );
}
