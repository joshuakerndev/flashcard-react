import React, { Component } from 'react';
import './HomePage.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class HomePage extends Component {
    render() {
        return(
            <div className='HomePage'>
                <h1 className='HomeHeader'>HOME</h1>
                <Link to='/deckpreview'>Decks</Link>
            </div>
        );
    }
}

export default HomePage;