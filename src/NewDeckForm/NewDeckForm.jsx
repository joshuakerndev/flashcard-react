import React, { useState } from 'react';
import "./NewDeckForm.css";
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import { addDeck } from '../redux/card/card.actions';

import { 
    Button,
    Form, 
    FormGroup, 
    Label, 
    Input
} from 'reactstrap';

const NewDeckForm = ({ addDeck }) => {

    //Hook useState for the form input state
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        englishText: '',
        chineseText: ''
    });

    const { englishText, chineseText, name, description } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    

    //Create new deck
    const storeDeck = () => {
        if(
            (name.length === 0 || !name.trim()) ||
            (description.length === 0 || !description.trim()) ||
            (englishText.length === 0 || !englishText.trim()) ||
            (chineseText.length === 0 || !chineseText.trim())
        ){
            alert('Please fill out each field!');
        } else{
            let newDeck = 
            {
                name: name,
                id: uuidv4(),
                description: description,
                cards: [
                    {
                        English: englishText, 
                        Chinese: chineseText, 
                        id: uuidv4()
                    }
                ]
            };
            addDeck(newDeck);
        }
    }
    

    return (
        <Form className="NewDeckForm">
            <FormGroup className="NewDeckFormGroup">
                <Label for="name">Name</Label>
                <Input 
                    type="text"
                    value={name}
                    onChange={e => onChange(e)} 
                    name="name" 
                    id="newDeckName"
                    placeholder="New Deck Name"
                    required={true}
                />
                <Label for="name">Description</Label>
                <Input 
                    type="text"
                    value={description}
                    onChange={e => onChange(e)} 
                    name="description" 
                    id="newDeckDescription"
                    placeholder="Description"
                    required={true}
                />
                <Label for="firstCard">First Card</Label>
                <Input 
                    type="text"
                    value={englishText}
                    onChange={e => onChange(e)} 
                    name="englishText" 
                    id="firstCardEnglishText"
                    placeholder="English"
                    required={true}
                />
                <Input 
                    type="text"
                    value={chineseText}
                    onChange={e => onChange(e)} 
                    name="chineseText" 
                    id="firstcardChineseText"
                    placeholder="Chinese"
                    required={true}
                />
            </FormGroup>
            <Button
                onClick={() => storeDeck()}
            >
                Submit
            </Button>
        </Form>
    )
}

export default connect(
    null, 
    { addDeck }
)(NewDeckForm);