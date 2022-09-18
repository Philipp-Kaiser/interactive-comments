import { useState } from 'react'

import ReplyText from './ReplyText'

import plusIcon from '../assets/icon-plus.svg'
import minusIcon from '../assets/icon-minus.svg'
import replyIcon from '../assets/icon-reply.svg'

import { Comment } from '../types/Comment'
import ReplyCard from './ReplyCard'

interface CommentCardProps {
  comment: Comment
}

export default function ComentCard({ comment }: CommentCardProps) {
  const [commentScore, setCommentScore] = useState<number>(comment.score ?? 0)

  const [replyFieldVisible, setReplyFieldVisible] = useState<boolean>(false)

  function showReplyField(): void {
    setReplyFieldVisible(!replyFieldVisible)
  }

  function onLike() {
    setCommentScore(commentScore + 1)
  }

  function onDislike() {
    setCommentScore(commentScore - 1)
  }

  return (
    <div>
      {comment && (
        <div className='flex bg-white mb-4 p-4 w-full rounded-md'>
          <div className='flex flex-col justify-between items-center mr-6 max-h-20 bg-slate-100 p-3 rounded-md'>
            <button onClick={onLike}>
              <img src={plusIcon} alt='like' />
            </button>

            <span className='text-blue-900'>{commentScore}</span>

            <button onClick={onDislike}>
              <img src={minusIcon} alt='dislike' />
            </button>
          </div>

          <div>
            <div className='flex items-center mb-4'>
              <div className='flex items-center mr-auto'>
                <img src={comment.user.image.png} className='mr-4 w-8' />
                <span className='mr-4 font-medium text-gray-800'>{comment.user.username}</span>
                <span className='font-normal text-gray-500'>{comment.createdAt}</span>
              </div>

              <div className='mx-4'>
                <button onClick={showReplyField} className='flex items-center'>
                  <img src={replyIcon} alt='' className='mr-2' />
                  <span className='text-blue-900 font-medium'>Reply</span>
                </button>
              </div>
            </div>

            <div>
              <p>{comment.content}</p>
            </div>
          </div>
        </div>
      )}

      {replyFieldVisible && <ReplyText isReply={true} />}

      {comment.replies && (
        <div className='flex flex-col items-end border-l-2 ml-8 pl-8'>
          {comment.replies.map(reply => (
            <ReplyCard reply={reply} />
          ))}
        </div>
      )}
    </div>
  )
}
