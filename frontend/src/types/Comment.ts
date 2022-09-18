interface Comment {
  id: number
  content: string
  createdAt: string
  score: number
  user: User
  replies: Reply[]
}

interface User {
  image: {
    png: string
    webp: string
  }
  username: string
}

type Reply = Omit<Comment, 'replies'>

export type { Comment, User, Reply }
