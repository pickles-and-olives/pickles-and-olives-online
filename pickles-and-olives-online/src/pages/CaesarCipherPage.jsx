import DefaultLayout from '../components/DefaultLayout';
import CipherGame from '../components/CipherGame';

export default function CaesarCipherPage() {
  return (
    <>
      <DefaultLayout colour={'#6A8EAE'}>
        <h1 className='p-6 text-center font-mono text-themeDark'>caesar cipher cracker</h1>
        <div className='m-auto flex w-2/3 flex-col text-center text-themeDark'>
          <p>
            A simple decoding game created for friends and family. Allows the player to utilise
            mental frequency analysis to reveal randomly selected messages.
          </p>
        </div>
        <CipherGame />
      </DefaultLayout>
    </>
  );
}
