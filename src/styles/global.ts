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
  display: flex;
  padding: 4rem 0;
  justify-content: center;
  align-items: center;
  margin: 2rem auto;

  @media (max-width: 480px) {
    align-items: center;
  }
`
export const PostListCard = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 0.8fr);

  @media (max-width: 480px) {
    grid-template-columns: reepeat(1);
  }
`
