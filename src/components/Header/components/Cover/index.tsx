import { CoverContainer, CoverLogo } from './styles'
import logoImg from '../../../../assets/logo.png'

export function Cover() {
  return (
    <CoverContainer>
      <CoverLogo>
        <img src={logoImg} alt="github blog logo" />
      </CoverLogo>
    </CoverContainer>
  )
}
