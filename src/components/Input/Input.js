import React from 'react';

function Input() {
    return (
    <>
    <form className="guess-input-wrapper">
        <label htmlFor="guess-input">Enter Guess:</label>
        <input id="guess-input" type="text"/>
    </form>
    </>
    )
}

export default Input;