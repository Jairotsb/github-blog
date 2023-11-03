import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle, PostListCard, PostListContainer } from './styles/global'
import { Header } from './components/Header'
import { SearchForm } from './components/SearchForm'
import { PostCard } from './components/PostCard'
import { useEffect, useState } from 'react'
import { issues } from './api'
import { PostCardProps } from './types'

function App() {
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
    <ThemeProvider theme={defaultTheme}>
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

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
/*


*/
