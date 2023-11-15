import styled from 'styled-components'

export const PostCardContainer = styled.div`
  width: 29rem;
  height: 16.2rem;

  border-radius: 10px;
  background-color: ${(props) => props.theme['base-post']};
  margin: 0 2rem 1.8rem 2rem;
  transition: all 0.6s;
  border: 1px solid transparent;
  padding: 0.5rem;

  &:hover {
    border: 2px solid ${(props) => props.theme['base-label']};
  }

  a {
    text-decoration: none;
  }
`

export const PostCardContent = styled.div`
  padding: 2rem;
`

export const PostCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

export const PostCardTitle = styled.h3`
  font-size: ${(props) => props.theme.fontSize.xlarge};
  color: ${(props) => props.theme['base-title']};
  margin: 0 1rem 1.8rem 0;
`

export const PostCardTime = styled.span`
  width: auto;
  margin-right: 2rem;
  font-size: ${(props) => props.theme.fontSize.small};
  color: ${(props) => props.theme['base-span']};
`

export const PostCardDescription = styled.p`
  font-size: ${(props) => props.theme.fontSize.medium};
  color: ${(props) => props.theme['base-text']};
`
