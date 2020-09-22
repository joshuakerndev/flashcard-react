const incrementCardHelper = (inputDeck, currentCard) => {
    const initialIndex = currentCard;
    const newIndex = (initialIndex + 1);
    if (newIndex === inputDeck.cards.length) {
        return 0
    } else {
        return newIndex
    }
}

export default incrementCardHelper;