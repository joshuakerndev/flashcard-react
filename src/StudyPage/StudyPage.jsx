import React from 'react';
import './StudyPage.css';
import FlashNavbar from '../FlashNavbar/FlashNavbar';

import { connect } from 'react-redux';
import incrementCardHelper from '../helpers/increment-cards-helper';
import decrementCardHelper from '../helpers/decrement-cards-helper';
import shuffleDeckHelper from '../helpers/shuffle-deck-helper';
import { incrementCard } from '../redux/card/card.actions';
import { decrementCard } from '../redux/card/card.actions';

import { Button } from 'reactstrap';
import Flashcard from '../Flashcard/Flashcard';
import { Link } from "react-router-dom";


const StudyPage = ({ 
                    currentDeck, 
                    currentCard, 
                    incrementCard, 
                    decrementCard
                }) => {

    const nextCard = incrementCardHelper(currentDeck, currentCard);
    const prevCard = decrementCardHelper(currentDeck, currentCard);

    const handleShuffleClick = () => {
        shuffleDeckHelper(currentDeck.cards);
        incrementCard(nextCard);
    }

    return(
        <div className='StudyPage'>
            <FlashNavbar />
            <div className='StudyPageHeader'>
                <h1>Study Time!</h1>
                <h2>{currentDeck.name}</h2>
            </div>

            <div className='StudyPageCardContainer'>
                <Button 
                    className='StudyPagePreviousButton'
                    onClick={() => decrementCard(prevCard)}
                >
                    Previous Card
                </Button>
                <Flashcard card={currentDeck.cards[currentCard]} />
                <Button 
                    className='StudyPageNextButton'
                    onClick={() => incrementCard(nextCard)}
                >
                    Next card
                </Button>
            </div>

            <div className="StudyButtonPanel">
                <Button
                    className='ShuffleDeckButton'
                    onClick={() => handleShuffleClick()}
                >
                    Shuffle
                </Button>
                <Link to='/decklist'>
                    <Button 
                        className='DeckPreviewBackButton'
                    >
                        Back
                    </Button>
                </Link>
            </div>
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