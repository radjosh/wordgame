import React from 'react';

function Keyboard({keyboardState}) {
  console.log(keyboardState);
  return (
    <div>
      <p className="keyboard">
        <span className={"keyboardCell " + keyboardState['Q']}>Q</span>
        <span className={"keyboardCell " + keyboardState['W']}>W</span>
        <span className={"keyboardCell " + keyboardState['E']}>E</span>
        <span className={"keyboardCell " + keyboardState['R']}>R</span>
        <span className={"keyboardCell " + keyboardState['T']}>T</span>
        <span className={"keyboardCell " + keyboardState['Y']}>Y</span>
        <span className={"keyboardCell " + keyboardState['U']}>U</span>
        <span className={"keyboardCell " + keyboardState['I']}>I</span>
        <span className={"keyboardCell " + keyboardState['O']}>O</span>
        <span className={"keyboardCell " + keyboardState['P']}>P</span>
      </p>
      <p className="keyboard">
        <span className={"keyboardCell " + keyboardState['A']}>A</span>
        <span className={"keyboardCell " + keyboardState['S']}>S</span>
        <span className={"keyboardCell " + keyboardState['D']}>D</span>
        <span className={"keyboardCell " + keyboardState['F']}>F</span>
        <span className={"keyboardCell " + keyboardState['G']}>G</span>
        <span className={"keyboardCell " + keyboardState['H']}>H</span>
        <span className={"keyboardCell " + keyboardState['J']}>J</span>
        <span className={"keyboardCell " + keyboardState['K']}>K</span>
        <span className={"keyboardCell " + keyboardState['L']}>L</span>
      </p>
      <p className="keyboard">
        <span className={"keyboardCell " + keyboardState['Z']}>Z</span>
        <span className={"keyboardCell " + keyboardState['X']}>X</span>
        <span className={"keyboardCell " + keyboardState['C']}>C</span>
        <span className={"keyboardCell " + keyboardState['V']}>V</span>
        <span className={"keyboardCell " + keyboardState['B']}>B</span>
        <span className={"keyboardCell " + keyboardState['N']}>N</span>
        <span className={"keyboardCell " + keyboardState['M']}>M</span>
      </p>
    </div>
  )
}

export default Keyboard;
