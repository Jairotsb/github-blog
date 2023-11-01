import styled from 'styled-components'

export const SearchFormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 4.5rem;
`
export const SearchFormInput = styled.input`
  width: 54rem;
  height: 3.1rem;

  margin: 0 auto;
  background-color: ${(props) => props.theme['base-input']};
  padding: 0.75rem 1rem;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme['base-border']};
  color: ${(props) => props.theme.white};

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`
