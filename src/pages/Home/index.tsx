import { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { SearchForm } from '../../components/SearchForm'
import { PostCardProps } from '../../types'
import { PostListCard, PostListContainer } from './styles'
import { issues } from '../../api'
import { PostCard } from '../../components/PostCard'

export function Home() {
  const [posts, setPosts] = useState<PostCardProps[]>([])

  useEffect(() => {
    async function fetchPosts() {
      const response = await issues.get('github-blog/issues')
      console.log(response.data)
      setPosts(response.data)
    }
    fetchPosts()
  }, [])
  return (
    <>
      <Header />
      <SearchForm />

      <PostListContainer>
        <PostListCard>
          {posts ? (
            posts.map((post) => (
              <PostCard
                key={post.id}
                title={post.title}
                body={post.body}
                created_at={post.created_at}
              />
            ))
          ) : (
            <p>Ainda não há nada por aqui... 😔</p>
          )}
        </PostListCard>
      </PostListContainer>
    </>
  )
}
