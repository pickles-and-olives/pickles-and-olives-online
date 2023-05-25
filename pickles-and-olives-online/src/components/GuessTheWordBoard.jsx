import { useState, useEffect } from 'react';
import moment from 'moment';
import { YellowButton } from './Buttons';
import { getWord } from '../util/WordUtil';
import GuessTheWordGame from './GuessTheWordGame';
import { useLocalStorage } from '../hooks/useLocalStorage';

export default function GuessTheWordBoard() {
  const [difficulty, setDifficulty] = useState('');
  const [targetWord, setTargetWord] = useLocalStorage('targetWord');
  const [adminMessage, setAdminMessage] = useState('');
  const [revealWord, setRevealWord] = useState(false);
  const date = moment().format('DD-MM-YYYY');

  const handleChangeDifficulty = () => {
    setAdminMessage('');
    console.log(difficulty)
    if (targetWord) {
      handleGetNewWord(difficulty);
    }
  };

  const handleGetNewWord = () => {
    console.log(difficulty);
      setRevealWord(false);
      const newWord = getWord(difficulty);
      setTargetWord(newWord);
      setAdminMessage('New word set!');
  };

  const handleGiveUp = () => {
    setRevealWord(true);
  }


  useEffect(() => {
    if (!difficulty) {
      setDifficulty('normal');
    }
    if (!targetWord && date) {
      handleGetNewWord(difficulty);
    }
  }, []);

  useEffect(() => {
    handleChangeDifficulty();
  }, [difficulty]);


  return (
    <>
      <div className='mx-auto text-center p-4'>
        <div className='bg-gradient-to-b from-themeBlue/30 h-screen '>
        <div className='grid grid-cols-4 mx-auto w-full text-center items-center p-4'>
          <div className='flex flex-col items-center'>
          <h3>Select your difficulty: </h3>
          <select name='difficultyChoice' onChange={e => setDifficulty(e.target.value)} className='border-2 border-themePink p-2 rounded-md w-1/2'>
            <option value='normal'>Normal</option>
            <option value='hard'>Hard</option>
          </select>
          </div>
          <div className='mx-auto p-4 col-span-2'>
            <p>
          I'm thinking of a word, it could be any length. Make guesses below and I'll tell you if my word is
          alphabetically before or after your guess.</p>
<br/>
<p>
          This is an adaptation of the game made by <a href="https://github.com/hryanjones"> H. Ryan Jones </a>, which can be found <a href="https://hryanjones.com/guess-my-word/">here</a>
          </p>
        </div>
          <div>
          <YellowButton buttonText={'Get new word'} action={handleGetNewWord} />
          
          {adminMessage && 
          <p>{adminMessage}</p>}
          </div>
        </div>

        
      <div className='mx-auto'>
        <GuessTheWordGame targetWord={targetWord} setAdminMessage={setAdminMessage}/>
      </div>
      </div>
      <div className='mx-auto w-1/2 h-screen text-center flex flex-col justify-end items-center'>
        <YellowButton buttonText={'Give up?'} action={handleGiveUp} />
        {revealWord && 
        <p> The word was... { targetWord }. Better luck next time!</p>}
      </div>
      </div>
    </>
  );
}
