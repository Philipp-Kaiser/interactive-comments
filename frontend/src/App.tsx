import { useEffect, useState } from 'react'

import ReplyText from './components/ReplyText'
import CommentCard from './components/CommentCard'

import { Comment } from './types/Comment'

// implement reply logic
// implement delete logic
// implement edit logic
// implement comment logic

function App() {
  const [comments, setComments] = useState<Comment[]>([])

  async function init() {
    const res = await fetch('../data.json')
    const data = await res.json()

    setComments(data.comments)
  }

  useEffect(() => {
    init()
  }, [])

  return (
    <div className='bg-slate-100 h-screen'>
      <div className='container mx-auto flex flex-col items-center  '>
        <section className='flex flex-col items-center w-1/2 mt-8'>
          {comments.map(comment => (
            <CommentCard comment={comment} key={comment.id} />
          ))}
        </section>

        <section className='flex flex-col items-center w-1/2'>
          <ReplyText isReply={false} />
        </section>
      </div>
    </div>
  )
}

export default App
