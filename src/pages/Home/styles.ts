import styled from 'styled-components'

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

  p {
    min-width:  100%;
    text-align: center;

  }
`
