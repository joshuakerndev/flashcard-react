import React, { useState } from 'react';
import './Flashcard.css';


const Flashcard = ({ card, isQuiz }) => {

    const [isRotated, setIsRotated] = useState(false);

    const handleClick = () => setIsRotated(!isRotated);

    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => setIsFlipped(!isFlipped);

    return(
        <div>
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
            <div className="flipCard" onClick={handleFlip}> 
            <div className="card" id={isFlipped ? "flipped" : ""}> 
                <div className="side front">Keyword</div> 
                <div className="side back">Definition<br/>Explanation</div> 
            </div> 
            </div> 
        </div>
    );
}

export default Flashcard;