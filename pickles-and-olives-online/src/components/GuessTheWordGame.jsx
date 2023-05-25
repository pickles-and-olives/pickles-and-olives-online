import { useState, useEffect } from 'react';
import { PinkButton } from './Buttons';
import axios from 'axios';
import { sanitizeGuess } from '../util/WordUtil';

export default function GuessTheWordGame({ targetWord, setAdminMessage }) {
  const [guess, setGuess] = useState('');
  const [guesses, setGuesses] = useState([]);
  const [beforeGuesses, setBeforeGuesses] = useState([]);
  const [sortedBeforeGuesses, setSortedBeforeGuesses] = useState([]);
  const [afterGuesses, setAfterGuesses] = useState([]);
  const [sortedAfterGuesses, setSortedAfterGuesses] = useState([]);
  const [guessCount, setGuessCount] = useState(0);
  const [hasWon, setHasWon] = useState(false);

  const [wordError, setWordError] = useState(false);
  const [wordErrorMessage, setWordErrorMessage] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  const handleSubmitGuess = async () => {
    if (guessCount == 0) {
      startTimer();
    }
    setGuess(sanitizeGuess(guess));
    validateGuess();
    const isValid = await wordInDictionary(guess);
    if (isValid) {
      compareGuessToTarget(guess);
      setGuess('');
      setGuessCount(guessCount + 1);
    }
  };

  const validateGuess = async () => {
    if (!guess) {
      setWordError(true);
      setWordErrorMessage("Guess can't be empty.");
    } else if (guesses && guesses.includes(guess)) {
      setWordError(true);
      setWordErrorMessage("Oops, you've already guessed that word.");
    } else {
      const wordIsValid = await wordInDictionary(guess);
      if (wordIsValid == false) {
        setWordError(true);
        setWordErrorMessage('Guess must be an English word. (Scrabble-acceptable)');
      } else {
        setWordError(false);
        setWordErrorMessage('');
      }
    }
  };

  const wordInDictionary = async (guess) => {
    try {
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${guess}`);
      if (response.status == 200) {
        console.log('ok');
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log('Not found');
      return false;
    }
  };

  const compareGuessToTarget = () => {
    setGuesses([...guesses, guess]);

    if (guess === targetWord) {
      setHasWon(true);
      setEndTime(new Date());
    } else if (guess < targetWord) {
      setBeforeGuesses([...beforeGuesses, guess]);
    } else if (guess > targetWord) {
      setAfterGuesses([...afterGuesses, guess]);
    }
    sortGuesses();
  };

  const sortGuesses = () => {
    setSortedBeforeGuesses(beforeGuesses.sort((a, b) => a.localeCompare(b)));
    setSortedAfterGuesses(afterGuesses.sort((a, b) => a.localeCompare(b)));
  };

  const clearGuesses = () => {
    setGuesses([]);
    setBeforeGuesses([]);
    setAfterGuesses([]);
    setSortedBeforeGuesses([]);
    setSortedAfterGuesses([]);
  };

  useEffect(() => {
    sortGuesses();
  }, [guesses]);

  useEffect(() => {
    if (hasWon && startTime && endTime) {
      const timeDiff = endTime - startTime;
      console.log(`Time taken: ${timeDiff} milliseconds`);
    }
  }, [hasWon, startTime, endTime]);

  useEffect(() => {
    clearGuesses();
    setHasWon(false);
    setStartTime(null);
    setEndTime(null);
  }, [targetWord]);

  const startTimer = () => {
    setStartTime(new Date());
  };

  return (
    <>
      <div className='grid-row mx-auto grid w-3/4 flex-col items-center bg-transparent text-center sm:grid-cols-2'>
        <div className='grid items-center justify-center p-6 text-center sm:grid-cols-2'>
          <input
            type='text'
            value={guess}
            placeholder='type a word then -->'
            className='border-2 p-2'
            onFocus={() => {
              setAdminMessage('');
              setWordError(false);
            }}
            onChange={(e) => {
              setGuess(e.target.value);
            }}
          ></input>

          <PinkButton buttonText={'Submit guess'} action={handleSubmitGuess} />
          <div>{wordError && <span> {wordErrorMessage} </span>}</div>
          {hasWon && (
            <div>
              <p>Woohoo you got it! The word was {targetWord} 💃</p>
              <p>It took you {guessCount} guesses and </p>
              {startTime && endTime && <p>Time taken: {(endTime - startTime) / 1000} seconds</p>}
            </div>
          )}
        </div>

        <div>
          <div className=''>
            <div className='grid grid-cols-2 items-end gap-6 border-b-2 border-themeBlue pb-2'>
              {sortedBeforeGuesses.length != 0 && <p className='col-span-1'>The word is after:</p>}
              <ul className='col-span-1'>
                {sortedBeforeGuesses.map((word, index) => (
                  <li key={index}>{word}</li>
                ))}
              </ul>
            </div>

            <div className='grid grid-cols-2 items-start gap-6 pt-2'>
              {sortedAfterGuesses.length != 0 && <p>The word is before:</p>}
              <ul>
                {sortedAfterGuesses.map((word, index) => (
                  <li key={index}>{word}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
