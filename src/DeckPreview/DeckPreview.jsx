import React, { useState } from 'react';
import { connect } from 'react-redux';
import FlashNavbar from '../FlashNavbar/FlashNavbar';
import { Link } from 'react-router-dom';

import NewCardForm from '../NewCardForm/NewCardForm';

import { 
    Button, 
    Collapse, 
    Container, 
    Row, 
    Col 
} from 'reactstrap';

import './DeckPreview.css';
import Flashcard from '../Flashcard/Flashcard';


const DeckPreview = ({ decks, currentDeck }) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className='DeckPreview'>
            <FlashNavbar />
            <h1>Preview / Edit</h1>
            <Link to='/decklist'>
                <Button 
                    className='DeckPreviewChangeDeckButton'
                >
                    Back
                </Button>
            </Link>
            <Button 
                color="primary" 
                onClick={toggle}
            >
                New Card
            </Button>
            <Collapse isOpen={isOpen} className="DeckPreviewCollapse">
                <NewCardForm currentDeck={currentDeck} />
            </Collapse>
                <Container>
                    <Row>
                        {currentDeck && 
                        currentDeck.cards.map((card) => (
                            <Col xs="12" sm="6" md="4" key={card.id}>
                                <Flashcard card={card} key={card.id} />
                            </Col>
                        ))}
                    </Row>
                </Container>
        </div>
    );
}

const mapStateToProps = (state) => ({
    currentDeck: state.card.currentDeck,
    decks: state.card.decks
});

export default connect(mapStateToProps)(DeckPreview);