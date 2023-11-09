import styled from 'styled-components'

export const PostHeaderContent = styled.div`
  width: 54rem;
  padding: 1.5rem;
  p {
    margin: 1.5rem 0 1.5rem 0.4rem;
  }

  ol,
  ul {
    margin: 1.5rem 0 1.5rem 2.5rem;
  }

  h3 {
    margin: 1.5rem 0 1.5rem 0;
  }

  pre {
    background: ${(props) => props.theme['base-profile']};
    padding: 1.5rem;
    border-radius: 10px;
    overflow: auto;
  }
  code {
    font-size: ${(props) => props.theme.fontSize.medium};
    box-shadow: rgba(0, 0, 0, 0.4);
    border: 1px solid ${(props) => props.theme['base-post']};
  }
`
