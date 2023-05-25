import { useEffect, useState } from 'react';
import CipherGameWorkArea from './CipherGameWorkArea';
import { getSecretMessage } from '../data/secretMessages';
import { cipher, decipher } from '../util/createCipherText';
import { PinkButton, GreenButton, BlueButton } from './Buttons';

export default function CipherGame() {
  const [secretMessage, setSecretMessage] = useState('');
  const [encryptedMessage, setEncryptedMessage] = useState();
  const [decryptedMessage, setDecryptedMessage] = useState();
  const [secretOffset, setSecretOffset] = useState('');
  const [chosenOffset, setChosenOffset] = useState('');
  const [guessCount, setGuessCount] = useState(0);
  const [win, setWin] = useState(false);
  const [revealAnswer, setRevealAnswer] = useState(false);

  const handleGetNewMessage = () => {
    setRevealAnswer(false);
    setGuessCount(0);
    setWin(false);
    setChosenOffset('');
    const newSecretOffset = Math.floor(Math.random() * 20) + 1;
    setSecretOffset(newSecretOffset);
    const newSecretMessage = getSecretMessage();
    setSecretMessage(newSecretMessage);
    const cipherText = cipher(newSecretMessage, newSecretOffset);
    setEncryptedMessage(cipherText);
  };

  const handleSubmit = () => {
    const tempDecrypt = decipher(encryptedMessage, chosenOffset);
    setDecryptedMessage(tempDecrypt);
    setGuessCount(guessCount + 1);
    if (chosenOffset == secretOffset) {
      setWin(true);
    }
  };

  const handleRevealAnswer = () => {
    setRevealAnswer(!revealAnswer);
  };

  useEffect(() => {
    if (!secretMessage) {
      handleGetNewMessage();
    }
  }, []);

  return (
    <>
      <div className='mx-auto my-6 h-full w-full bg-themeBlue/30 p-6 text-center text-themeDark'>
        <h3 className='p-2 text-lg font-semibold'>Encrypted message: </h3>
        <h4 className='m-auto w-1/2 rounded-md border-2 border-themeBlue bg-themeDark p-2 font-mono text-white'>
          {encryptedMessage}
        </h4>

        <div className='m-auto flex w-1/2 flex-col items-center p-4'>
          <h3 className='p-2 text-lg font-semibold'>Enter the offset to decode the message: </h3>
          <input
            type='number'
            className='m-2 w-1/4 rounded-md border-2 border-themeBlue p-2'
            value={chosenOffset}
            onChange={(e) => setChosenOffset(e.target.value)}
          />
          <GreenButton buttonText={'Go'} action={handleSubmit} />
        </div>
        <span className='text-sm'>Guesses made: {guessCount}</span>
        <div className='p-2'>
          <h3 className='p-2 text-lg font-semibold'>Message decrypted using provided offset: </h3>
          <textarea
            className='m-2 min-h-min w-1/2 rounded-md bg-white p-2'
            readOnly
            value={decryptedMessage}
            placeholder='Enter an offset above to view a decryption'
          ></textarea>
        </div>

        <div className='m-auto flex w-1/2 flex-col items-center justify-center py-2 sm:flex-row'>
          <PinkButton
            buttonText={'try a new message'}
            action={handleGetNewMessage}
            className='flex-1'
          />

          <BlueButton
            buttonText={revealAnswer ? 'hide answer' : 'reveal answer'}
            action={handleRevealAnswer}
            className='flex-1'
          />
        </div>
        {win && (
          <div className='m-auto w-1/2'>
            <h2 className='text-xl font-semibold'>You got it!</h2>
            <p className='mx-auto my-2 w-1/2 rounded-md border-2 border-themeBlue bg-themeDark p-1 font-mono text-white'>
              {secretMessage}
            </p>
            <BlueButton buttonText={'Play again?'} action={handleGetNewMessage} />
          </div>
        )}
        {revealAnswer && (
          <div>
            <h4 className='text-lg font-semibold'>The message was:</h4>
            <p className='mx-auto my-2 w-1/2 rounded-md border-2 border-themeBlue bg-themeDark p-1 font-mono text-white'>
              {secretMessage}
            </p>
            <h4 className='text-lg font-semibold'>and the cipher offset was: </h4>
            <p className='mx-auto my-2 w-1/4 rounded-md border-2 border-themeBlue bg-themeDark p-1 font-mono text-white'>
              {secretOffset}
            </p>
          </div>
        )}

        <CipherGameWorkArea />
      </div>
    </>
  );
}
