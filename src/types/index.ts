export interface PostCardProps {
  id?: number
  number: string
  title: string
  body: string
  url?: string
  created_at: string
  comments: number

  user: {
    login: string
  }
}
