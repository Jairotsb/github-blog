import { useParams } from 'react-router-dom'
import { PostHeader } from '../../components/PostHeader'
import { PostContainer } from './styles'
import { useContextSelector } from 'use-context-selector';
import { GithubContext } from '../../contexts/GithubContext';
import { useCallback, useEffect, useState } from 'react';
import { issues } from '../../api';
import { PostCardProps } from '../../types';




export function Post() {
  const params = useParams();
  const [postContent, setPostContent] = useState<PostCardProps>(Object);

  const loadMarkdown = useCallback(async () => {
    console.log(params.number)
    const response = await issues.get(`github-blog/issues/${params.number}`);
    setPostContent(response.data);
  }, []);


  useEffect(() => {
    loadMarkdown()
  }, [params.number])
  
  return (
    <PostContainer>
      <PostHeader content={postContent}/>
    </PostContainer>
  )
}
