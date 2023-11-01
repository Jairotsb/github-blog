import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle, PostListCard, PostListContainer } from './styles/global'
import { Header } from './components/Header'
import { SearchForm } from './components/SearchForm'
import { PostCard } from './components/PostCard'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <SearchForm />

      <PostListContainer>
        <PostListCard>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </PostListCard>
      </PostListContainer>

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
