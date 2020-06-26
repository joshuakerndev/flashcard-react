import React from 'react';
import { connect } from 'react-redux';

import { setDeck } from '../redux/card/card.actions';
import cycleFlashcard from '../helpers/flashcard-cycle-helper';

import './FlashcardContainer.css';
import Flashcard from '../Flashcard/Flashcard';


const FlashcardContainer = ({ currentDeck, setDeck }) => {

    const nextDeck = cycleFlashcard(currentDeck);

    return (
        <div className='FlashcardContainer'>
            {currentDeck.map((card) => (
                <Flashcard card={card} />
            ))}
            <button onClick={() => setDeck(nextDeck)}>Change Deck</button>
        </div>
    );
}

const mapStateToProps = (state) => ({
    currentDeck: state.card.currentDeck
});

const mapDispatchToProps = dispatch => ({
    setDeck: deck => dispatch(setDeck(deck))
});

export default connect(mapStateToProps, mapDispatchToProps)(FlashcardContainer);