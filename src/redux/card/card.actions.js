export const setDeck = deck => ({
    type: 'SET_DECK',
    payload: deck
});

export const incrementCard = newCard => ({
    type: 'INCREMENT_CARD',
    payload: newCard
});

export const decrementCard = newCard => ({
    type: 'DECREMENT_CARD',
    payload: newCard
});

export const setDecks = decks => ({
    type: 'SET_DECKS',
    payload: decks
});

export const resetDeck = () => ({
    type: 'RESET_DECK'
});

export const addDeck = (newDeck) => async dispatch => {
    try {
        const savedDecks = JSON.parse(localStorage.getItem("decks"));
        savedDecks.push(newDeck);
        localStorage.setItem("decks", JSON.stringify(savedDecks));
        dispatch({
            type: 'NEW_DECK',
            payload: newDeck
        });
    } catch(err){
        console.log(err);
    }
};

export const addCard = (newCard, deckId) => async dispatch => {
    try {
        const savedDecks = JSON.parse(localStorage.getItem("decks"));
        for(let i=0; i<savedDecks.length; i++){
            if(savedDecks[i].id === deckId){
                savedDecks[i].cards.push(newCard)
            }
        }
        localStorage.setItem("decks", JSON.stringify(savedDecks));
        const result = JSON.parse(localStorage.getItem("decks"));
        dispatch({
            type: 'SET_DECKS',
            payload: result
        });
    } catch(err){
        console.log(err);
    }
};