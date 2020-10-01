import React, { useState } from 'react';
import "./EditCardForm.css";
import { v4 as uuidv4 } from 'uuid';

import { editCard } from '../redux/card/card.actions';

import { connect } from 'react-redux';

import { 
    Button,
    Form, 
    FormGroup, 
    Label, 
    Input
} from 'reactstrap';

const EditCardForm = ({ currentDeck, editCard, cardId }) => {

    //Hook useState for the form input state
    const [formData, setFormData] = useState({
        englishText: '',
        chineseText: ''
    });

    const { englishText, chineseText } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    //Logic for adding new card to current deck
    const changeCard = () => {
        if(
            (englishText.length === 0 || !englishText.trim()) ||
            (chineseText.length === 0 || !chineseText.trim())
        ){
            alert('Please fill out each field!');
        } else {
            let newCard = 
            {
                English: englishText, 
                Chinese: chineseText, 
                id: uuidv4()
            };
            editCard(newCard, cardId, currentDeck.id);
        }
    }
    

    return (
        <Form className="EditCardForm">
            <FormGroup>
                <Label for="englishSide">English</Label>
                <Input 
                    type="text"
                    value={englishText}
                    onChange={e => onChange(e)} 
                    name="englishText" 
                    id="englishText"
                    placeholder="English"
                />
                <Label for="chineseSide">Chinese</Label>
                <Input 
                    type="text"
                    value={chineseText}
                    onChange={e => onChange(e)} 
                    name="chineseText" 
                    id="chineseText"
                    placeholder="Chinese"
                />
            </FormGroup>
            <Button
                onClick={() => changeCard()}
            >
                Submit
            </Button>
        </Form>
    )
}

export default connect(null, { editCard })(EditCardForm);