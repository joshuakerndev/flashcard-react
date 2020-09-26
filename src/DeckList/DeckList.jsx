import React, { useState } from 'react';
import { connect } from 'react-redux';
import FlashNavbar from '../FlashNavbar/FlashNavbar';

import { Link } from 'react-router-dom';

import { setDeck, setDecks } from '../redux/card/card.actions';

import { Button } from 'reactstrap';
import 
    { 
        Container, 
        Row, 
        Col, 
        Collapse 
    } from "reactstrap";

import './DeckList.css';
import Flashcard from '../Flashcard/Flashcard';
import NewDeckForm from '../NewDeckForm/NewDeckForm';


const DeckList = ({ decks, setDeck }) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className='DeckList'>
            <FlashNavbar />
            <h1>Your Flashcard Decks</h1>
                <Button 
                    color="primary" 
                    onClick={toggle}
                >
                    New Deck
                </Button>
                <Collapse isOpen={isOpen} className="DeckListCollapse">
                    <NewDeckForm />
                </Collapse>
                <Container>
                    <Row>
                        {decks.map((deck) => (
                            <Col xs="12" sm="6" md="4" key={deck.id}>
                                <Flashcard card={deck.cards[0]} />
                                <h4>{deck.name}</h4>
                                <p>Cards: {deck.cards.length}</p>
                                <p>Description: {deck.description}</p>
                                <Link to="/deckpreview">
                                    <Button
                                        onClick={() => setDeck(deck)}
                                    >
                                        Edit
                                    </Button>
                                </Link>
                                <Link to="/study">
                                    <Button
                                        onClick={() => setDeck(deck)}
                                    >
                                        Study!
                                    </Button>
                                </Link>
                            </Col>
                        ))}
                    </Row>
                </Container>
        </div>
    );
}

const mapStateToProps = (state) => ({
    decks: state.card.decks
});

const mapDispatchToProps = dispatch => ({
    setDeck: deck => dispatch(setDeck(deck)),
    setDecks: decks => dispatch(setDecks(decks))
});

export default connect(mapStateToProps, { mapDispatchToProps, setDecks, setDeck })(DeckList);