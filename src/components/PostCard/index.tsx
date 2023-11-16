/* eslint-disable camelcase */

import { useEffect, useState } from 'react'
import { PostCardProps } from '../../types'
import {
  PostCardContainer,
  PostCardContent,
  PostCardDescription,
  PostCardHeader,
  PostCardTime,
  PostCardTitle,
} from './styles'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Link } from 'react-router-dom'

export function PostCard({ title, body, created_at, number }: PostCardProps) {
  const [description, setDescription] = useState('')

    
  function getDescription(text: string) {
    const firstPhrase = text.split(/[.!?]/)

    if (firstPhrase.length > 0) {
      const result = firstPhrase[0].trim() + (text[firstPhrase[0].length] || '')
      setDescription(result)
    } else {
      setDescription(text)
    }
  }

  useEffect(() => {
    getDescription(body)
  }, [body])


  return (
    <PostCardContainer>
      <Link to={`/content/${number}`}>
      <PostCardContent>
        <PostCardHeader>
          <PostCardTitle>{title}</PostCardTitle>
          <PostCardTime>
            {formatDistanceToNow(new Date(created_at), {
              addSuffix: true,
              locale: ptBR,
            })}
          </PostCardTime>
        </PostCardHeader>
        <PostCardDescription>{description}</PostCardDescription>
      </PostCardContent>
    </Link>
    </PostCardContainer>
  )
}
