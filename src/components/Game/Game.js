import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Input from "../Input";
import Guesses from "../Guesses";
import Keyboard from "../Keyboard";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [checks, setChecks] = React.useState([]);
  const [isWin, setIsWin] = React.useState(false);
  const [isLose, setIsLose] = React.useState(false);
  const [keyboardState, setKeyboardState] = React.useState(
    _initializeKeyboardState
  );

  function _initializeKeyboardState() {
    const alphabet = "QWERTYUIOPASDFGHJKLZXCVBNM";
    const initObj = {};
    for (letter of alphabet) {
      initObj[letter] = "unused";
    }
    return initObj;
  }

  function handleGuess(guess) {
    const newGuess = {
      text: guess,
      id: crypto.randomUUID(),
    };
    const nextGuesses = [...guesses, newGuess];
    setGuesses(nextGuesses);
    checkGuess(guess);
  }

  function _updateKeyboard(updates) {
    // iterate over changes, culling updatables into new keepers object
    // use keepers to update state without mutation
    // EX:
    // updates['k']: 'misplaced'
    let keepers = {};
    for (let letter in updates) {
      const oldStatus = keyboardState[updates[letter]];
      if (oldStatus === "correct" || oldStatus === "incorrect") {
        continue; // these never change
      }
      keepers[letter] = updates[letter];
    }
    setKeyboardState({
      ...keyboardState,
      ...keepers,
    });
  }

  function checkGuess(guess) {
    // iterate over letters of current guess
    // 2 effects:
    // build new checks list of letter:status objects
    // update keyboard w/ best statuses for each letter
    const newChecks = [];
    let isCorrect = true;
    const updates = {};

    for (i = 0; i < guess.length; i++) {
      if (guess[i] === answer[i]) {
        newChecks.push({ letter: guess[i], status: "correct" });
        updates[guess[i]] = "correct";
      } else if (answer.indexOf(guess[i]) > -1) {
        newChecks.push({ letter: guess[i], status: "misplaced" });
        isCorrect = false;
        updates[guess[i]] = "misplaced";
      } else {
        newChecks.push({ letter: guess[i], status: "incorrect" });
        isCorrect = false;
        updates[guess[i]] = "incorrect";
      }
    }
    // console.log(newChecks);
    _updateKeyboard(updates);
    setChecks([...checks, newChecks]);
    checkWin(isCorrect);
  }

  function checkWin(isCorrect) {
    if (isCorrect) {
      win();
    } else if (guesses.length === NUM_OF_GUESSES_ALLOWED - 1) {
      // because of delay in rerendering!!
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
      <Guesses guesses={guesses} checks={checks} />
      <Input
        handleGuess={handleGuess}
        isWin={isWin}
        isLose={isLose}
        num_guesses={guesses.length}
        answer={answer}
      />
      <Keyboard keyboardState={keyboardState} />
    </>
  );
}

export default Game;
