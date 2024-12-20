import React from 'react';
import PICTURES from './data/pictures';
import { useGallery } from './hooks';

function Gallery() {
    const { index, delay, updateDelay, updateIncrement } = useGallery(PICTURES);

    return (
        <div className="Gallery">
            <img
                src={ PICTURES[index].image }
                alt='gallery'
            />
            <div className="multiform">
                <div>
                    Gallery Transition Delay (seconds):
                    <input type="number" value={ delay / 1000} onChange={ updateDelay }/>
                </div>
                <div>
                    Gallery increment:
                    <input type='number' onChange={updateIncrement} />
                </div>
            </div>
        </div>
    )
}

export default Gallery;