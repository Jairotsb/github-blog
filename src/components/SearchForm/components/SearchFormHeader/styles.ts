import styled from 'styled-components'

export const SearchFormHeaderContainer = styled.div`
  width: 54rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.7rem;
`

export const SearchFormTitle = styled.h4`
  font-size: ${(props) => props.theme.fontSize.large};
  color: ${(props) => props.theme['base-subtitle']};
  line-height: 160%;
`

export const SearchFormSubtitle = styled.p`
  font-size: ${(props) => props.theme.fontSize.small};
  color: ${(props) => props.theme['base-span']};
  line-height: 160%;
`
