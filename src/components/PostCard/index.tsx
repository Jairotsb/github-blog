import {
  PostCardContainer,
  PostCardContent,
  PostCardDescription,
  PostCardHeader,
  PostCardTime,
  PostCardTitle,
} from './styles'

export function PostCard() {
  return (
    <PostCardContainer>
      <PostCardContent>
        <PostCardHeader>
          <PostCardTitle>
            JavaScript data types and data structures
          </PostCardTitle>
          <PostCardTime>há 1 dia</PostCardTime>
        </PostCardHeader>
        <PostCardDescription>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in
        </PostCardDescription>
      </PostCardContent>
    </PostCardContainer>
  )
}
