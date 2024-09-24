import { ChangeEvent, useState } from 'react';
import { SearchFormHeader } from './components/SearchFormHeader'
import { SearchFormContainer, SearchFormInput } from './styles'

interface SearchFormProps{
  onSearch: (query: string) => void;

}

export function SearchForm({onSearch}: SearchFormProps) {
  const [searchText, setSearchText] = useState('');

  function handleInputChange(event: ChangeEvent<HTMLInputElement>){
    const query = event.target.value; 
    setSearchText(query);
    onSearch(query); 
  }
  return (
    <SearchFormContainer>
      <SearchFormHeader />
      <SearchFormInput placeholder="Buscar conteúdo" value={searchText} onChange={handleInputChange}/>
    </SearchFormContainer>
  )
}
