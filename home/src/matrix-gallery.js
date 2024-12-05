
import React from 'react';
import PICTURES from './data/matrix';
import { useGallery } from './hooks';

function MatrixGallery() {
    const { index, delay, updateDelay, updateIncrement } = useGallery(PICTURES);

    return (
        <div className="Gallery">
            <img
                src={ PICTURES[index] }
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

export default MatrixGallery;