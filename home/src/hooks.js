
import { useEffect, useState } from 'react';

export const useFetch = (url, initialValue) => {
    const [result, setResult] = useState(initialValue);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(json => {
                setResult(json);
            });
    }, []);

    return result;
}

export const SECONDS = 1000;
export const minimumDelay = 1 * SECONDS;
export const minimumIncrement = 1;

export const useGallery = (imagesCollection) => {
    const [index, setIndex] = useState(0);
    const [delay, setDelay] = useState(3 * SECONDS);
    const [increment, setIncrement] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(storedIndex => {
                return (storedIndex + increment) % imagesCollection.length;
            })
        }, delay)

        return () => {
            clearInterval(interval);
        }
    }, [delay, increment, imagesCollection.length]);

    const updateDelay = event => {
        const delay = Number(event.target.value) * SECONDS;

        setDelay(delay < minimumDelay ? minimumDelay : delay);
    }

    const updateIncrement = event => {
        const increment = Number(event.target.value);

        setIncrement(increment < minimumIncrement ? minimumIncrement : increment);
    }

    return { index, delay, updateDelay, updateIncrement }
}