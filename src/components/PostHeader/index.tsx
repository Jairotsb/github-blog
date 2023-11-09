// import Markdown from 'react-markdown'
import Markdown from 'react-markdown'
import { Cover } from '../Header/components/Cover'
import { HeaderContainer } from '../Header/styles'
import { BlogInfo } from './components/BlogInfo'
import { PostHeaderContent } from './styles'
import axios from 'axios'
import { useEffect, useState } from 'react'

export function PostHeader() {
  const [post, setPost] = useState('')

  useEffect(() => {
    const loadMarkdown = async () => {
      try {
        const response = await axios.get(
          'https://api.github.com/repos/Jairotsb/github-blog/issues/1',
        )

        setPost(response.data.body)
      } catch (error) {
        console.error('erro: ', error)
      }
    }

    loadMarkdown()
  }, [])

  return (
    <HeaderContainer>
      <Cover />
      <BlogInfo />

      <PostHeaderContent>
        <Markdown>{post}</Markdown>
      </PostHeaderContent>
    </HeaderContainer>
  )
}
