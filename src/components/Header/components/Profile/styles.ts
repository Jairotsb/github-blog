import styled from 'styled-components'
import {
  HeaderCard,
  HeaderContainer,
  HeaderInfo,
  HeaderInfoContent,
  HeaderLink,
  HeaderName,
} from '../../../../styles/components/HeaderCard'

export const ProfileContainer = styled(HeaderContainer)``

export const ProfileHeader = styled(HeaderCard)``

export const ProfileInfo = styled(HeaderInfo)``

export const ProfileInfoContent = styled(HeaderInfoContent)``

export const ProfileName = styled(HeaderName)``

export const ProfileContent = styled.div`
  padding: 0.5rem 2rem;
`

export const ProfileBio = styled.p`
  font-size: ${(props) => props.theme.fontSize.medium};
  line-height: 160%;
  color: ${(props) => props.theme['base-text']};
  margin-top: 0.5rem;
`

export const GithubLink = styled(HeaderLink)``
