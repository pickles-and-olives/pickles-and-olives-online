import DefaultLayout from '../components/DefaultLayout';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <>
      <DefaultLayout colour={'#FCBF49'}>
        <div>
          <div className=' mx-auto w-full p-8 text-center sm:w-2/3'>
            <h1>hello</h1>
            <p className='m-auto w-full p-2 sm:w-2/3'>
              Thanks for visiting! I'm Melissa, and this is a space I created to experiment with fun
              / silly / interesting development ideas and technologies.{' '}
            </p>
            <h3>
              If you're interested, you can find more info about me{' '}
              <Link to='/about' className='hover:underline'>
                here.
              </Link>
            </h3>
          </div>

          <div className='mx-auto my-4 flex w-full flex-col text-center'>
            <h1 className='p-4'>explore</h1>
            <div className='bg-themePink p-4'>
              <Link to='/guess-the-word' className='p-6 text-4xl hover:text-white hover:underline'>
                guess the word
              </Link>
            </div>
            <div className='bg-themeGreen p-4'>
              <Link to='/memes' className='p-6 text-4xl hover:text-white hover:underline'>
                make a meme
              </Link>
            </div>
            <div className='bg-themeBlue p-4'>
              <Link to='/caesar-cipher' className='p-6 text-4xl hover:text-white hover:underline'>
                crack a code
              </Link>
            </div>
            <div className='bg-themePink p-4'>
              <Link to='/about' className='p-6 text-4xl hover:text-white hover:underline'>
                about
              </Link>
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
}
