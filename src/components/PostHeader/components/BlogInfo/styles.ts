import styled from 'styled-components'
import {
  HeaderCard,
  HeaderContainer,
  HeaderInfo,
  HeaderInfoContent,
  HeaderLink,
  HeaderName,
} from '../../../../styles/components/HeaderCard'

export const BlogInfoContainer = styled(HeaderContainer)``

export const BlogInfoAction = styled(HeaderCard)``

export const BlogLink = styled(HeaderLink)`
  &:first-child {
    svg {
      margin-right: 0.5rem;
    }
  }
`

export const BlogTitle = styled(HeaderName)`
  margin: 2.5rem 0 2.5rem 0;
`

export const BlogInfoContent = styled.div`
  width: 100%;
`

export const BlogInfoDetails = styled(HeaderInfoContent)``
export const BlogInfoLinks = styled(HeaderInfo)``
