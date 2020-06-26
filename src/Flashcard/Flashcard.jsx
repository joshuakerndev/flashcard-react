import React, { Component } from 'react';
import './Flashcard.css';

class Flashcard extends Component {
    render() {
        return(
            <div className='Flashcard'>
                <div className='Card-Front'>
                    <p className='Flashcard-Text'>{this.props.card.English}</p>
                </div>
                <div className='Card-Back'>
                    <p className='Flashcard-Text'>{this.props.card.Chinese}</p>
                </div>
            </div>
        );
    }
}

export default Flashcard;