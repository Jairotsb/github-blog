import { Cover } from '../Header/components/Cover'
import { HeaderContainer } from '../Header/styles'
import { BlogInfo } from './components/BlogInfo'

export function PostHeader() {
  return (
    <HeaderContainer>
      <Cover />
      <BlogInfo />
    </HeaderContainer>
  )
}
