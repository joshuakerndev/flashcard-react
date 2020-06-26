import React from 'react';
import './StudyPage.css';
import { connect } from 'react-redux';
import cycleFlashcard from '../helpers/flashcard-cycle-helper';
import Flashcard from '../Flashcard/Flashcard';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";



const StudyPage = ({ currentDeck }) => {
    return(
        <div className='StudyPage'>
            <Flashcard card={currentDeck[0]} />
            <Link to='/deckpreview' >
                Back
            </Link>
        </div>
    );
}

const mapStateToProps = (state) => ({
    currentDeck: state.card.currentDeck
});

export default connect(mapStateToProps)(StudyPage);