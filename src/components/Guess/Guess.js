import React from 'react';


function Guess({guess, checks, guessNumber}) {
  if (guess === undefined) {
    return (
      <div>
        <p className="guess">
          <span key={crypto.randomUUID()} className="cell"></span>
          <span key={crypto.randomUUID()} className="cell"></span>
          <span key={crypto.randomUUID()} className="cell"></span>
          <span key={crypto.randomUUID()} className="cell"></span>
          <span key={crypto.randomUUID()} className="cell"></span>
        </p>
      </div>
    )
  }

  const arr = guess.text.split('');

  return (
  <div>
    <p className="guess">
      {arr.map((letter, index) => <span key={crypto.randomUUID()} className={"cell " + checks[guessNumber][index].status}>{guess.text[index]}</span>)}
    </p>
  </div>
  )
}

export default Guess;
