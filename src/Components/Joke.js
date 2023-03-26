import React from 'react';

function Joke(props) {
    if(props.question)
    {
        return (
            <div>
                <p>Question: {props.question}</p>
                <p>Punchline: {props.punchline}</p>
            </div>
        );
    }
    else
    {
        return(
            <div>
                <p>Punchline: {props.punchline}</p>
            </div>
        );
    }
}

export default Joke;