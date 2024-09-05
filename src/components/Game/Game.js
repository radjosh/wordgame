import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Input from '../Input'
import Guesses from '../Guesses'
import Keyboard from '../Keyboard';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [checks, setChecks] = React.useState([]);
  const [isWin, setIsWin] = React.useState(false);
  const [isLose, setIsLose] = React.useState(false);
  const [keyboardState, setKeyboardState] = React.useState({Q: 'unused', W: 'unused'});


  function handleGuess(guess) {
    const newGuess = {
      text:guess,
      id:crypto.randomUUID()
    };
    const nextGuesses = [...guesses, newGuess];
    setGuesses(nextGuesses);
    checkGuess(guess);
  }

  function checkGuess(guess) {
    const newChecks = [];
    let isCorrect = true;

    for (i = 0; i < guess.length; i++) {
      if (guess[i] === answer[i]) {
        newChecks.push({ letter: guess[i], status: 'correct'})
      } else if (answer.indexOf(guess[i]) > -1) {
        newChecks.push({ letter: guess[i], status: 'misplaced'})
        isCorrect = false;
      } else {
        newChecks.push({ letter: guess[i], status: 'incorrect'})
        isCorrect = false
      }
    }
    // console.log(newChecks);
    setChecks([...checks, newChecks]);
    checkWin(isCorrect);
  }

  function checkWin(isCorrect) {
    if (isCorrect) {
      win();
    } else if (guesses.length === NUM_OF_GUESSES_ALLOWED - 1) { // because of delay in rerendering!!
      lose();
    } else {
      return;
    }
  }

  function win() {
    const newIsWin = true;
    setIsWin(newIsWin);
  }

  function lose() {
    const newIsLose = true;
    setIsLose(newIsLose);
  }

  return (
  <>
    <Guesses guesses={guesses} checks={checks}/>
    <Input 
      handleGuess={handleGuess}
      isWin={isWin}
      isLose={isLose}
      num_guesses={guesses.length}
      answer={answer}
    />
    <Keyboard />
  </>
  )
}

export default Game;
