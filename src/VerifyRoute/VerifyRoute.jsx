import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';


const VerifyRoute = ({ 
    component: Component,
    currentDeck, 
    ...rest 
}) => (
    <Route 
        { ...rest } 
        render={props => 
            (!currentDeck) ? (
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

export default connect(mapStateToProps)(VerifyRoute);