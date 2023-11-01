import { SearchFormHeader } from './components/SearchFormHeader'
import { SearchFormContainer, SearchFormInput } from './styles'

export function SearchForm() {
  return (
    <SearchFormContainer>
      <SearchFormHeader />
      <SearchFormInput placeholder="Buscar conteúdo" />
    </SearchFormContainer>
  )
}
