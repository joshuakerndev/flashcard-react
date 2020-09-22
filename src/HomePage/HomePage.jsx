import React, { Component } from 'react';
import './HomePage.css';
import { Button } from 'reactstrap';
import FlashNavbar from '../FlashNavbar/FlashNavbar';
import { Link } from "react-router-dom";

class HomePage extends Component {
    render() {
        return(
            <div className='HomePage'>
                <FlashNavbar />
                <h1 className='HomeHeader'>HOME</h1>
                <Link to='/decklist'>
                    <Button>Decks</Button>
                </Link>
            </div>
        );
    }
}

export default HomePage;