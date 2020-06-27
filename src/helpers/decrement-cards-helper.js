const decrementCardHelper = (inputDeck, currentCard) => {
    const initialIndex = currentCard;
    const newIndex = (initialIndex - 1);
    if (newIndex < 0) {
        return (inputDeck.length - 1)
    } else {
        return newIndex
    }
}

export default decrementCardHelper;