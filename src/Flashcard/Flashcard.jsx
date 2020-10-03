import React, { useState } from 'react';
import './Flashcard.css';


const Flashcard = ({ card, isQuiz }) => {

    const [isRotated, setIsRotated] = useState(false);

    const handleClick = () => setIsRotated(!isRotated);

    return(
        <div 
            className='Flashcard' 
            id={isRotated ? "isRotated" : null}
            onClick={handleClick}
        >
            <div className='Card-Front'>
                <p className='Flashcard-Text'>{card.English}</p>
            </div>
            <div className='Card-Back'>
                <p className='Flashcard-Text'>{isQuiz ? card.English : card.Chinese}</p>
            </div>
        </div>
    );
}

export default Flashcard;