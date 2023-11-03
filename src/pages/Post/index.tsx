import {
  PostBack,
  PostComment,
  PostContainer,
  PostContainerCard,
  PostHeader,
  PostInfo,
  PostLink,
  PostName,
  PostTime,
  PostTitle,
} from './styles'

export function Post() {
  return (
    <PostContainer>
      <PostContainerCard>
        <PostHeader>
          <PostBack>Hello world</PostBack>
          <PostLink></PostLink>
        </PostHeader>

        <PostTitle></PostTitle>

        <PostInfo>
          <PostName></PostName>
          <PostTime></PostTime>
          <PostComment></PostComment>
        </PostInfo>
      </PostContainerCard>
    </PostContainer>
  )
}
