import { AiOutlineClose } from 'react-icons/ai';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';

const BookModel = ({ book, onClose }) => {
  return (
    <div
      className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center'
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className='w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative'
      >
        <AiOutlineClose
          className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer'
          onClick={onClose}
        />
        <h2 className='w-fit px-4 py-1 bg-red-300 rounded-lg'>
          {book.publishYear}
        </h2>
        <h4 className='my-2 text-gray-500'>{book._id}</h4>
        <div className='flex justify-start items-center gap-x-2'>
          <PiBookOpenTextLight className='text-red-300 text-2xl' />
          <h2 className='my-1'>{book.title}</h2>
        </div>
        <div className='flex justify-start items-center gap-x-2'>
          <BiUserCircle className='text-red-300 text-2xl' />
          <h2 className='my-1'>{book.author}</h2>
        </div>
        <p className='mt-4'>It's great to have you join us</p>
        <p className='my-2'>
        "A reader lives a thousand lives before he dies, said Jojen. The man who never reads lives only one. There is something about reading that unlocks the hidden chambers of our hearts and minds, allowing us to experience lives and worlds far beyond our own. Through books, we connect with characters and stories that stay with us forever. Each tale we dive into becomes a part of us, shaping our thoughts, our dreams, and our destinies. To read is to embark on a journey of endless discovery, where the horizons are boundless, and the possibilities are infinite."
        -George R.R. Martin
        </p>
      </div>
    </div>
  );
};

export default BookModel;