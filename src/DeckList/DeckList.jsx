import React, { useState } from 'react';
import { connect } from 'react-redux';
import FlashNavbar from '../FlashNavbar/FlashNavbar';

import { Link } from 'react-router-dom';

import { 
    setDeck,
    setDecks,
    deleteDeck
} from '../redux/card/card.actions';

import { 
    Button,
    Container, 
    Row, 
    Col, 
    Collapse 
} from "reactstrap";

import './DeckList.css';
import Flashcard from '../Flashcard/Flashcard';
import NewDeckForm from '../NewDeckForm/NewDeckForm';


const DeckList = ({ decks, setDeck, deleteDeck }) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const handleDeleteClick = (id) => {
        if(window.confirm('Are you sure? Deleting a deck cannot be undone!')){
            deleteDeck(id);
        }
    }

    return (
        <div className='DeckList'>

            <FlashNavbar />

            <div className="DeckListHeader">
                <h1>Your Flashcard Decks</h1>
                <Button 
                    color="primary" 
                    onClick={toggle}
                    className="NewDeckButton"
                >
                    New Deck
                </Button>
                <Collapse isOpen={isOpen} className="DeckListCollapse">
                    <NewDeckForm />
                </Collapse>
            </div>

            <div className="DeckListDecks">
                <Container>
                    <Row>
                        {decks.map((deck) => (
                            <Col 
                                className="DeckPreviewPanel" 
                                xs="12" 
                                sm="6" 
                                md="4" 
                                key={deck.id}
                            >
                                <Flashcard card={deck.cards[0]} />
                                <div className="DeckTextPanel">
                                    <h4>{deck.name}</h4>
                                    <p>Cards: {deck.cards.length}</p>
                                    <p>Description: {deck.description}</p>
                                </div>
                                <Row className="DeckButtonPanel">
                                    <Link to="/deckpreview">
                                        <Button
                                            className="DeckButton"
                                            onClick={() => setDeck(deck)}
                                        >
                                            View / Edit
                                        </Button>
                                    </Link>
                                    <Link to="/study">
                                        <Button
                                            className="DeckButton"
                                            onClick={() => setDeck(deck)}
                                        >
                                            Study!
                                        </Button>
                                    </Link>
                                    <Link to="/quiz">
                                        <Button
                                            className="DeckButton"
                                            onClick={() => setDeck(deck)}
                                        >
                                            Quiz!
                                        </Button>
                                    </Link>
                                    <Button
                                        className="DeckButton"
                                        color="danger"
                                        onClick={() => handleDeleteClick(deck.id)}
                                    >
                                        Delete
                                    </Button>
                                </Row>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    decks: state.card.decks
});

const mapDispatchToProps = dispatch => ({
    setDeck: deck => dispatch(setDeck(deck)),
    setDecks: decks => dispatch(setDecks(decks)),
    deleteDeck: id => dispatch(deleteDeck(id))
});

export default connect(
    mapStateToProps, 
    { 
        mapDispatchToProps, 
        setDecks, 
        setDeck, 
        deleteDeck 
    }
)(DeckList);