import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
 * {
        margin: 0; 
        padding: 0; 
        box-sizing: border-box;
    }
    
    :focus {
        outline: 0; 
        box-shadow: 0 0 2px ${(props) => props.theme.blue}
    }

    body {
        background-color: ${(props) => props.theme['base-background']} ;
        color: ${(props) => props.theme['base-title']};
        -webkit-font-smoothing: antialiased;
        font-family: 'Nunito', sans-serif;
    }


    @media(max-width: 480px){
        html {
            font-size: 85%;
        }
    }

`

export const PostListContainer = styled.main`
  width: 100%;
  display: flex;
  padding: 4rem 0;
  justify-content: center;
  margin-top: 2rem;

  @media (max-width: 480px) {
    align-items: center;
  }
`
export const PostListCard = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`
