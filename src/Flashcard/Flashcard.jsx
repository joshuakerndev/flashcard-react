import React from 'react';
import './Flashcard.css';

const Flashcard = ({ card, isQuiz }) => {
    return(
        <div className='Flashcard'>
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