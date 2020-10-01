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

export const deleteDeck = (id) => async dispatch => {
    try {
        const savedDecks = JSON.parse(localStorage.getItem("decks"));
        const updatedList = savedDecks.filter(deck => deck.id !== id);
        localStorage.setItem("decks", JSON.stringify(updatedList));
        dispatch({
            type: "SET_DECKS",
            payload: updatedList
        });
    } catch(err) {
        console.log(err);
    }
}

export const addCard = (newCard, deckId) => async dispatch => {
    try {
        const savedDecks = JSON.parse(localStorage.getItem("decks"));
        let updatedDeck;
        for(let i=0; i<savedDecks.length; i++){
            if(savedDecks[i].id === deckId){
                savedDecks[i].cards.push(newCard);
                updatedDeck = savedDecks[i];
                console.log(updatedDeck);
            }
        }
        localStorage.setItem("decks", JSON.stringify(savedDecks));
        const result = JSON.parse(localStorage.getItem("decks"));
        dispatch({
            type: 'SET_DECKS',
            payload: result
        });
        dispatch({
            type: 'SET_DECK',
            payload: updatedDeck
        });

    } catch(err){
        console.log(err);
    }
};

export const editCard = (newCard, cardId, deckId) => async dispatch => {
    try {
        let savedDecks = JSON.parse(localStorage.getItem("decks"));
        let updatedDeck;
        let newCurrentDeck;
        for(let i=0; i<savedDecks.length; i++){
            if(savedDecks[i].id === deckId){
                savedDecks[i].cards.push(newCard);
                updatedDeck = (savedDecks[i].cards.filter(card => card.id !== cardId));
                savedDecks[i].cards = updatedDeck;
                newCurrentDeck = savedDecks[i];
                console.log(savedDecks)
            }
        }
        localStorage.setItem("decks", JSON.stringify(savedDecks));
        const result = JSON.parse(localStorage.getItem("decks"));
        dispatch({
            type: 'SET_DECKS',
            payload: result
        });
        dispatch({
            type: 'SET_DECK',
            payload: newCurrentDeck
        });

    } catch(err){
        console.log(err);
    }
};

export const deleteCard = (cardId, deckId) => async dispatch => {
    try{
        let savedDecks = JSON.parse(localStorage.getItem("decks"));
        let updatedDeck;
        let newCurrentDeck;
        for(let i=0; i< savedDecks.length; i++){
            if(savedDecks[i].id === deckId){
                updatedDeck = (savedDecks[i].cards.filter(card => card.id !== cardId));
                savedDecks[i].cards = updatedDeck;
                newCurrentDeck = savedDecks[i];
            }
        }
        localStorage.setItem("decks", JSON.stringify(savedDecks));
        const result = JSON.parse(localStorage.getItem("decks"));
        dispatch({
            type: 'SET_DECKS',
            payload: result
        });
        dispatch({
            type: 'SET_DECK',
            payload: newCurrentDeck
        });
    } catch(err) {
        console.log(err);
    }
}
