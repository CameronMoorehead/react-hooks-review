
import { useEffect, useState } from 'react';

export const useFetch = (url, initialValue) => {
    const [result, setResult] = useState(initialValue);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(json => {
                console.log('joke json', json)
                setResult(json[0]);
            });
    }, []);

    return result;
}
