import FLASHCARD_DATA from '../DeckPreview/FLASHCARD_DATA';
import FLASHCARD_DATA_2 from '../DeckPreview/FLASHCARD_DATA_2';
import FLASHCARD_DATA_3 from '../DeckPreview/FLASHCARD_DATA_3';


const cycleDeck = (inputDeck) => {
    const cycleFlashcardArr = [FLASHCARD_DATA, FLASHCARD_DATA_2, FLASHCARD_DATA_3];
    const newIndex = (cycleFlashcardArr.indexOf(inputDeck)+1);
    const newDeck = cycleFlashcardArr[newIndex];
    if (newIndex === cycleFlashcardArr.length) {
        return cycleFlashcardArr[0]
    } else {
        return newDeck
    }
}

export default cycleDeck;