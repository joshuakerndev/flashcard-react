import FLASHCARD_DATA from '../../DeckPreview/FLASHCARD_DATA';
import FLASHCARD_DATA_2 from '../../DeckPreview/FLASHCARD_DATA_2';
import FLASHCARD_DATA_3 from '../../DeckPreview/FLASHCARD_DATA_3';



const INITIAL_STATE = {
    currentDeck: FLASHCARD_DATA
}

const cardReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_DECK':
            return {
                ...state,
                currentDeck: action.payload
            };
        default:
            return state;
    }
};

export default cardReducer;