import React from 'react';
import { useFetch } from './hooks';

function Joke() {
    const jokes = useFetch("https://official-joke-api.appspot.com/jokes/programming/random", {})

    return (
        <div>
            <h3>Joke of the session</h3>
            <p>{jokes[0]?.setup}</p>
            <p><em>{jokes[0]?.punchline}</em></p>
        </div>
    )
}

export default Joke;