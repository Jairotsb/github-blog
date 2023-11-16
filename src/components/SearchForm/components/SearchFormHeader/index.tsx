import { useContextSelector } from 'use-context-selector';
import {
  SearchFormHeaderContainer,
  SearchFormSubtitle,
  SearchFormTitle,
} from './styles'
import { GithubContext } from '../../../../contexts/GithubContext';

export function SearchFormHeader() {
  const posts = useContextSelector(GithubContext, (context) => {
    return context.posts;
  });
  return (
    <SearchFormHeaderContainer>
      <SearchFormTitle>Publicações</SearchFormTitle>
      <SearchFormSubtitle>{posts.length} {posts.length > 1 ? 'publicações' : 'publicação'}</SearchFormSubtitle>
    </SearchFormHeaderContainer>
  )
}
