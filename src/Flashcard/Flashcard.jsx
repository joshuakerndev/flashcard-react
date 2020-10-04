import React, { useState } from 'react';
import './Flashcard.css';

import ReactCardFlip from 'react-card-flip';

const Flashcard = ({ card, isQuiz }) => {

    const [isFlipped, setIsFlipped] = useState(false);
    const handleFlip = () => setIsFlipped(!isFlipped);

    return(
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