import { useState } from "react";
import { alphabetArray } from "../data/alphabet";

export default function CipherGameWorkArea() {
    const [letterSelected, setLetterSelected] = useState('');

    const handleLetterClick = (letter) => {
        setLetterSelected(letter);

    }

  return (
    <div className='p-6 w-5/6 m-auto'>
      <div className="flex flex-row justify-around">
        {alphabetArray.map((letter, index) => 
            <p className={`text-black px-2 hover:bg-themeBlue hover:rounded-md hover:cursor-pointer ${letterSelected === letter ? 'bg-themeBlue rounded-md' : ''}`} 
            key={index}
            onClick={() => handleLetterClick(letter)}
            >
                {letter}
                </p>
        )}
      </div>

      <textarea
        placeholder='Use this space to write notes if you require.'
        className='m-4 p-4 rounded-md w-1/2'
      ></textarea>
    </div>
  );
}
