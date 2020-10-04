import React, { useState } from 'react';
import './Flashcard.css';

import ReactCardFlip from 'react-card-flip';

import { Button } from 'reactstrap';

const Flashcard = ({ card, isQuiz }) => {

    const [isRotated, setIsRotated] = useState(false);

    const handleClick = () => setIsRotated(!isRotated);

    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => setIsFlipped(!isFlipped);

    return(
        // <div 
        //     className='Flashcard' 
        //     id={isRotated ? "isRotated" : null}
        //     onClick={handleClick}
        // >
        //     <div className='Card-Front'>
        //         <p className='Flashcard-Text'>{card.English}</p>
        //     </div>
        //     <div className='Card-Back'>
        //         <p className='Flashcard-Text'>{isQuiz ? card.English : card.Chinese}</p>
        //     </div>
        // </div>
        <ReactCardFlip 
            isFlipped={isFlipped} 
            flipDirection="horizontal"
            className="Flashcard"
        >
            <div className="Card-Front" onClick={handleFlip} >
                <p className="Flashcard-Text">{card.English}</p>
            </div>
    
            <div className="Card-Back" onClick={handleFlip}>
                <p className="Flashcard-Text">{isQuiz ? card.English : card.Chinese}</p>
            </div>
        </ReactCardFlip>
    );
}

export default Flashcard;