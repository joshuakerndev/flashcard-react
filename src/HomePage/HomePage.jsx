import React, { Component } from 'react';
import './HomePage.css';
import { Button } from 'reactstrap';
import FlashNavbar from '../FlashNavbar/FlashNavbar';
import { Link } from "react-router-dom";

class HomePage extends Component {
    render() {
        return(
            <div>
                <FlashNavbar />
                <div className='HomePage'>
                    <div className="HomeHeader">
                        <h1>Welcome to flash</h1>
                        <p>The intuitive flashcard study assistant</p>
                    </div>
                    <Link to='/decklist'>
                        <Button>Decks</Button>
                    </Link>
                </div>
            </div>
            
        );
    }
}

export default HomePage;