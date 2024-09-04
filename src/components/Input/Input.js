import React from 'react';

function Input({handleGuess, isWin, isLose, num_guesses, answer}) {
    const [input, setInput] = React.useState('');

    function cleanInput() {
        // validate length
        if (input.length != 5) {
            window.alert("must be a 5-letter word");
        } else {
            // set to uppercase
            console.info({input});
            let newInput = input.toUpperCase();
            console.info({newInput});
            handleGuess(newInput);
        }
    }

    return (
    <>
    { isWin 
        ?   <div className="happy banner">
            <p>
            <strong>Congratulations!</strong> Got it in
            <strong> {num_guesses} guesses</strong>.
            </p>
            </div>
        : <div></div>
    }

    { isLose 
        ?   <div className="sad banner">
            <p>Sorry, the correct answer is <strong> {answer}</strong>.</p>
            </div>
        :   <div></div>
    }

    <form className="guess-input-wrapper"
        onSubmit={event => {
            event.preventDefault();
            cleanInput()
            setInput('');
        }}  
    >
        <label htmlFor="guess-input">Enter Guess:</label>
        <input id="guess-input" type="text"
            value={input}
            onChange={event => setInput(event.target.value)}
            autoFocus
            disabled = {isWin || isLose}
        />
    </form>
    </>
    )
}

export default Input;