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