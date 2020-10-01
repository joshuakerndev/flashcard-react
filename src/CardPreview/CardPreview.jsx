import React, { useState } from 'react';
import './CardPreview.css';

import Flashcard from '../Flashcard/Flashcard';
import EditCardForm from '../EditCardForm/EditCardForm';

import { 
    Button, 
    Collapse
} from 'reactstrap';

const CardPreview = ({ card, currentDeck, handleDeleteCardClick }) => {

    const [isEditOpen, setIsEditOpen] = useState(false);
    const toggleEdit = () => setIsEditOpen(!isEditOpen);

    return (
        <div className="CardPreview">
            <Flashcard card={card} key={card.id} />
            <div className="CardPreviewButtonPanel">
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
            </div>
            <Collapse isOpen={isEditOpen} className="EditCardCollapse">
                <EditCardForm
                    currentDeck={currentDeck} 
                    cardId={card.id}
                />
            </Collapse>
        </div>
    )
}

export default CardPreview;