import React from 'react';
import Guess from '../Guess'

import { NUM_OF_GUESSES_ALLOWED } from '../../../src/constants'
import { range } from '../../utils'

function Guesses({guesses, checks}) {
  const num_blanks = NUM_OF_GUESSES_ALLOWED - guesses.length;
  return (
  <div>
    {guesses.map((guess, index) => <Guess key={crypto.randomUUID()} guess={guess} checks={checks} index={index}/>)}
    {range(num_blanks).map(i => <Guess key={crypto.randomUUID()} />)}
  </div>
  )
}


export default Guesses;
