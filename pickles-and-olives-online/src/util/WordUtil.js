import { normalWords } from '../data/normalWordList';
import { hardWords } from '../data/hardWordList';
import axios from 'axios';

function sanitizeGuess(guess) {
  return guess
    .toLowerCase()
    .trim()
    .replace(/[^a-z]/g, '');
}

function validateGuess(guess, guesses) {}

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

function getInvalidReason(guess, guessesArr) {
  if (!guess) {
    return "Guess can't be empty.";
  }
  if (!wordLookUp(guess)) {
    console.log(wordLookUp(guess));
    return 'Guess must be an English word. (Scrabble-acceptable)';
  }

  if (guessesArr && guessesArr.includes(guess)) {
    return "Oops, you've already guessed that word.";
  }
  return '';
}

async function wordLookUp(guess) {
  let foundInDictionary = false;
  try {
    const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${guess}`);
    console.log(response.status);
    if (response.status == 200) {
      foundInDictionary = true;
    }
  } catch (err) {
    console.log(err);
  }

  return foundInDictionary;
}

function getWord(difficulty) {
  let word;
  if (difficulty == 'hard') {
    const index = getRandomInt(hardWords);
    word = hardWords[index];
    console.log(difficulty + word);
  } else {
    const index = getRandomInt(normalWords);
    word = normalWords[index];
    console.log(difficulty + word);
  }
  return word;
}

function getRandomInt(wordList) {
  const min = 1;
  const max = wordList.length;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export { sanitizeGuess, getInvalidReason, getWord, validateGuess, wordInDictionary };
