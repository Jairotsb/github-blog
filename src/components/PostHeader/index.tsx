// import Markdown from 'react-markdown'
import Markdown from "react-markdown";
import { Cover } from "../Header/components/Cover";
import { HeaderContainer } from "../Header/styles";
import { BlogInfo } from "./components/BlogInfo";
import { PostHeaderContent } from "./styles";
import { PostCardProps } from "../../types";


interface PostHeaderProps {
  content: PostCardProps;
}

export function PostHeader({ content }: PostHeaderProps) { 
  //console.log(content.title)
  return (
    <HeaderContainer>
      <Cover />
      <BlogInfo title={content.title} author={'Jairotsb'} comments={content.comments} created_at={content.created_at}/>

      <PostHeaderContent>
        <Markdown>{content.body}</Markdown>
      </PostHeaderContent>
    </HeaderContainer>
  );
}
