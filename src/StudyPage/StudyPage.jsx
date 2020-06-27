import React from 'react';
import './StudyPage.css';

import { connect } from 'react-redux';
import incrementCardHelper from '../helpers/increment-cards-helper';
import decrementCardHelper from '../helpers/decrement-cards-helper';
import { incrementCard } from '../redux/card/card.actions';
import { decrementCard } from '../redux/card/card.actions';

import Flashcard from '../Flashcard/Flashcard';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";



const StudyPage = ({ currentDeck, currentCard, incrementCard, decrementCard }) => {

    const nextCard = incrementCardHelper(currentDeck, currentCard);
    const prevCard = decrementCardHelper(currentDeck, currentCard);

    return(
        <div className='StudyPage'>
            <div className='StudyPageHeader'>
                <h1>Study Time!</h1>
            </div>
            <div className='StudyPageCardContainer'>
                <button 
                    className='StudyPagePreviousButton'
                    onClick={() => decrementCard(prevCard)}
                >
                    Previous Card
                </button>
                <Flashcard card={currentDeck[currentCard]} />
                <button 
                    className='StudyPageNextButton'
                    onClick={() => incrementCard(nextCard)}
                >
                    Next card
                </button>
            </div>
            <Link to='/deckpreview' >
                Back
            </Link>
        </div>
    );
}

const mapStateToProps = (state) => ({
    currentDeck: state.card.currentDeck,
    currentCard: state.card.currentCard
});

const mapDispatchToProps = dispatch => ({
    incrementCard: newCard => dispatch(incrementCard(newCard)),
    decrementCard: newCard => dispatch(decrementCard(newCard))
});

export default connect(mapStateToProps, mapDispatchToProps)(StudyPage);