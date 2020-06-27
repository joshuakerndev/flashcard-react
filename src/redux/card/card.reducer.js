import FLASHCARD_DATA from '../../DeckPreview/FLASHCARD_DATA';



const INITIAL_STATE = {
    currentDeck: FLASHCARD_DATA,
    currentCard: 0
}

const cardReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_DECK':
            return {
                ...state,
                currentDeck: action.payload
            };
        case 'INCREMENT_CARD':
            return {
                ...state,
                currentCard: action.payload
            };
        case 'DECREMENT_CARD':
            return {
                ...state,
                currentCard: action.payload
            };
        default:
            return state;
    }
};

export default cardReducer;