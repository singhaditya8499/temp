import React from 'react';
import Joke from './Joke';

function MainContent() {
    return(
        <div>
            <Joke punchline="aa"/>
            <Joke question="B" punchline="bb"/>
            <Joke question="C" punchline="cc"/>
        </div>
    );
}

export default MainContent;