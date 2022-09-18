import { useEffect, useState } from 'react'

import plusIcon from './assets/icon-plus.svg'
import minusIcon from './assets/icon-minus.svg'
import replyIcon from './assets/icon-reply.svg'

import amyRobson from './assets/avatars/image-amyrobson.png'
import juliuSomo from './assets/avatars/image-juliusomo.png'

// Create comment card
// Implement voting logic
// implement reply logic
// implement delete logic
// implement edit logic
// implement comment logic

function App() {
  const [comments, setComments] = useState({})
  const [likeCount, setLikeCount] = useState(0)
  const [showReplyField, setShowReplyField] = useState(false)

  function onShowReplyField() {
    setShowReplyField(!showReplyField)
  }

  function onLike() {
    setLikeCount(likeCount + 1)
  }

  function onDislike() {
    setLikeCount(likeCount - 1)
  }

  async function init() {
    const res = await fetch('../data.json')
    const data = await res.json()

    setComments(data)
  }

  useEffect(() => {
    init()
    console.log(comments)
  }, [])

  return (
    <div className='bg-slate-100 h-screen '>
      <div className='container mx-auto flex flex-col items-center  '>
        <section className='flex flex-col items-center w-1/2'>
          <div className='flex bg-white mb-4 mt-8 p-4 w-full rounded-md'>
            <div className='flex flex-col justify-between justify-self-start mr-6 max-h-20 bg-slate-100 p-3 rounded-md'>
              <button onClick={onLike}>
                <img src={plusIcon} alt='like' />
              </button>

              <span className='text-blue-900'>{likeCount}</span>

              <button onClick={onDislike}>
                <img src={minusIcon} alt='dislike' />
              </button>
            </div>

            <div>
              <div className='flex items-center mb-4'>
                <div className='flex items-center mr-auto'>
                  <img src={amyRobson} alt='pic of amyrobson' className='mr-4 w-8' />
                  <span className='mr-4 font-medium text-gray-800'>amyrobson</span>
                  <span className='font-normal text-gray-500'>1 month ago</span>
                </div>

                <div className='mx-4'>
                  <button onClick={onShowReplyField} className='flex items-center'>
                    <img src={replyIcon} alt='' className='mr-2' />
                    <span className='text-blue-900 font-medium'>Reply</span>
                  </button>
                </div>
              </div>

              <div>
                <p>
                  Impressive! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores ab sunt dolor ipsam
                  veritatis unde facere voluptates fugiat quae quas consectetur facilis laborum, minima quidem,
                  similique temporibus est mollitia aperiam.
                </p>
              </div>
            </div>
          </div>
          {showReplyField && (
            <div className='flex justify-between items-start bg-white mb-4 p-4 w-full rounded-md'>
              <img src={juliuSomo} alt='pic of user' className='mx-4 w-8' />
              <textarea
                name=''
                id=''
                cols={25}
                rows={3}
                className='border border-solid rounded-md p-4 border-gray-400 flex-grow'
              />
              <button className='bg-blue-900 rounded-md px-5 py-2 mx-4 text-white font-medium'>REPLY</button>
            </div>
          )}
        </section>

        <section>Add comments</section>
      </div>
    </div>
  )
}

export default App
