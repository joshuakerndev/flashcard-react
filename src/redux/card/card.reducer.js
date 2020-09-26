import FLASHCARD_DATA from '../../DeckPreview/FLASHCARD_DATA';



const INITIAL_STATE = {
    currentDeck: FLASHCARD_DATA,
    currentCard: 0,
    decks: []
}

const cardReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_DECK':
            return {
                ...state,
                currentDeck: action.payload,
                currentCard: 0
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
        case 'SET_DECKS':
            return {
                ...state,
                decks: action.payload
            };
        case 'RESET_DECK':
            return {
                ...state,
                currentCard: 0
            };
        case 'NEW_DECK':
            return {
                ...state,
                decks: [action.payload, ...state.decks]
            };
        default:
            return state;
    }
};

export default cardReducer;