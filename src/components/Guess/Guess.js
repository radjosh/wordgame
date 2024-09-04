import React from 'react';


function Guess({guess, checks, index}) {
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
  
  return (
  <div>
    <p className="guess">
      <span key={crypto.randomUUID()} className={"cell " + checks[index][0].status}>{guess.text[0]}</span>
      <span key={crypto.randomUUID()} className={"cell " + checks[index][1].status}>{guess.text[1]}</span>
      <span key={crypto.randomUUID()} className={"cell " + checks[index][2].status}>{guess.text[2]}</span>
      <span key={crypto.randomUUID()} className={"cell " + checks[index][3].status}>{guess.text[3]}</span>
      <span key={crypto.randomUUID()} className={"cell " + checks[index][4].status}>{guess.text[4]}</span>
    </p>
  </div>
  )
}

export default Guess;
