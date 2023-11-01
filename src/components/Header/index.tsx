import { Cover } from './components/Cover'
import { Profile } from './components/Profile'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <Cover />
      <Profile />
    </HeaderContainer>
  )
}
