import React, { useState } from 'react';
import { connect } from 'react-redux';
import FlashNavbar from '../FlashNavbar/FlashNavbar';
import { Link } from 'react-router-dom';

import NewCardForm from '../NewCardForm/NewCardForm';
import EditCardForm from '../EditCardForm/EditCardForm';

import { deleteCard } from '../redux/card/card.actions';

import { 
    Button, 
    Collapse, 
    Container, 
    Row, 
    Col 
} from 'reactstrap';

import './DeckPreview.css';
import Flashcard from '../Flashcard/Flashcard';


const DeckPreview = ({ decks, currentDeck, deleteCard }) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const [isEditOpen, setIsEditOpen] = useState(false);
    const toggleEdit = () => setIsEditOpen(!isEditOpen);

    const handleDeleteCardClick = (cardId, deckId) => {
        if(currentDeck.cards.length <= 1){
            return alert("Cannot delete last card, please edit card or delete deck");
        } else if(window.confirm("Are you sure? Card cannot be recovered")){
            deleteCard(cardId, deckId);
        } else {
            return;
        }
    }

    return (
        <div className='DeckPreview'>

            <FlashNavbar />

            <div className="DeckPreviewHeader">
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
            </div>

            <div className="PreviewCards">
                <Container>
                    <Row>
                        {(currentDeck.cards.map((card) => (
                            <Col 
                                xs="12" 
                                sm="6" 
                                md="4" 
                                key={card.id}
                            >
                                <Flashcard card={card} key={card.id} />
                                <Button 
                                    className='EditFlashcardButton'
                                    onClick={toggleEdit}
                                >
                                    Edit
                                </Button>
                                <Button 
                                    onClick={() => 
                                        handleDeleteCardClick(card.id, currentDeck.id)
                                    }
                                    className='DeleteFlashcardButton'
                                    color="danger"
                                >
                                    Delete
                                </Button>
                                <Collapse isOpen={isEditOpen} className="EditCardCollapse">
                                    <EditCardForm
                                        currentDeck={currentDeck} 
                                        cardId={card.id}
                                    />
                                </Collapse>
                            </Col>
                        )))}
                    </Row>
                </Container>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    currentDeck: state.card.currentDeck,
    decks: state.card.decks
});

const mapDispatchToProps = dispatch => ({
    deleteCard: cardId => dispatch(deleteCard(cardId))
});

export default connect(
    mapStateToProps, 
    { 
        mapDispatchToProps, 
        deleteCard 
    }
)(DeckPreview);