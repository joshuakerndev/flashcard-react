import React from 'react';
import { connect } from 'react-redux';

import { setDeck } from '../redux/card/card.actions';
import cycleDeck from '../helpers/cycle-deck-helper';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import './DeckPreview.css';
import Flashcard from '../Flashcard/Flashcard';


const DeckPreview = ({ currentDeck, setDeck }) => {

    const nextDeck = cycleDeck(currentDeck);

    return (
        <div className='DeckPreview'>
            {currentDeck.map((card) => (
                <Flashcard card={card} />
            ))}
            <button 
                onClick={() => setDeck(nextDeck)}
            >
                Change Deck
            </button>
            <Link className='DeckPreviewHomeLink' to='/'>
                Home
            </Link>
            <Link className='DeckPreviewStudyPageLink' to='/study'>
                Study!
            </Link>

        </div>
    );
}

const mapStateToProps = (state) => ({
    currentDeck: state.card.currentDeck
});

const mapDispatchToProps = dispatch => ({
    setDeck: deck => dispatch(setDeck(deck))
});

export default connect(mapStateToProps, mapDispatchToProps)(DeckPreview);