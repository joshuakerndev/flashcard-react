import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';


const VerifyQuizRoute = ({ 
    component: Component,
    currentDeck, 
    ...rest 
}) => (
    <Route 
        { ...rest } 
        render={props => 
            (!currentDeck || currentDeck.cards.length < 4) ? (
                <Redirect to='/decklist' />
            ) : (
                <Component {...props} />
            ) 
        } 
    />
);

const mapStateToProps = state => ({
    currentDeck: state.card.currentDeck
});

export default connect(mapStateToProps)(VerifyQuizRoute);