import { useState } from 'react';
import { alphabetArray } from '../data/alphabet';

export default function CipherGameWorkArea() {
  const [letterSelected, setLetterSelected] = useState('');

  const handleLetterClick = (letter) => {
    setLetterSelected(letter);
  };

  return (
    <div className='m-auto w-5/6 p-6'>
      <div className='flex flex-row flex-wrap justify-around'>
        {alphabetArray.map((letter, index) => (
          <p
            className={`px-2 text-black hover:cursor-pointer hover:rounded-md hover:bg-themeBlue ${
              letterSelected === letter ? 'rounded-md bg-themeBlue' : ''
            }`}
            key={index}
            onClick={() => handleLetterClick(letter)}
          >
            {letter}
          </p>
        ))}
      </div>

      <textarea
        placeholder='Use this space to write notes if you require.'
        className='m-4 w-1/2 rounded-md p-4'
      ></textarea>
    </div>
  );
}
