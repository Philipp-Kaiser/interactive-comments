import juliuSomo from '../assets/avatars/image-juliusomo.png'

interface ReplyTextProps {
  isReply: Boolean
}

export default function ReplyText({ isReply }: ReplyTextProps) {
  return (
    <div className='flex justify-between items-start bg-white mb-4 p-4 w-full rounded-md'>
      <img src={juliuSomo} alt='pic of user' className='mx-4 w-8' />
      <textarea
        name=''
        id=''
        cols={25}
        rows={3}
        className='border border-solid rounded-md p-4 border-gray-400 flex-grow'
      />
      <button className='bg-blue-900 rounded-md px-5 py-2 mx-4 text-white font-medium'>
        {isReply ? 'REPLY' : 'SEND'}
      </button>
    </div>
  )
}
