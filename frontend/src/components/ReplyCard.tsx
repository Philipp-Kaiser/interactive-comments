import { useState } from 'react'

import { Reply } from '../types/Comment'

import plusIcon from '../assets/icon-plus.svg'
import minusIcon from '../assets/icon-minus.svg'
import replyIcon from '../assets/icon-reply.svg'
import ReplyText from './ReplyText'

interface ReplyCardProps {
  reply: Reply
}

export default function ReplyCard({ reply }: ReplyCardProps) {
  const [replyScore, setReplyScore] = useState<number>(reply.score ?? 0)

  const [replyFieldVisible, setReplyFieldVisible] = useState<boolean>(false)

  function showReplyField(): void {
    setReplyFieldVisible(!replyFieldVisible)
  }

  function onLike() {
    setReplyScore(replyScore + 1)
  }

  function onDislike() {
    setReplyScore(replyScore - 1)
  }

  return (
    <>
      <div className='flex bg-white mb-4 p-4 rounded-md' key={reply.id}>
        <div className='flex flex-col justify-between items-center mr-6 max-h-20 bg-slate-100 p-3 rounded-md'>
          <button onClick={onLike}>
            <img src={plusIcon} alt='like' />
          </button>

          <span className='text-blue-900'>{replyScore}</span>

          <button onClick={onDislike}>
            <img src={minusIcon} alt='dislike' />
          </button>
        </div>

        <div>
          <div className='flex items-center mb-4'>
            <div className='flex items-center mr-auto'>
              <img src={reply.user.image.png} className='mr-4 w-8' />
              <span className='mr-4 font-medium text-gray-800'>{reply.user.username}</span>
              <span className='font-normal text-gray-500'>{reply.createdAt}</span>
            </div>

            <div className='mx-4'>
              <button onClick={showReplyField} className='flex items-center'>
                <img src={replyIcon} alt='' className='mr-2' />
                <span className='text-blue-900 font-medium'>Reply</span>
              </button>
            </div>
          </div>

          <div>
            <p>{reply.content}</p>
          </div>
        </div>
      </div>
      {replyFieldVisible && <ReplyText isReply={true} />}
    </>
  )
}
