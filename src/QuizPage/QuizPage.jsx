import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import FlashNavbar from '../FlashNavbar/FlashNavbar';

import { 
    Button, 
    Form,
    FormGroup,
    Label,
    Input,
} from 'reactstrap';

import './QuizPage.css';
import Flashcard from '../Flashcard/Flashcard';

import incrementCardHelper from '../helpers/increment-cards-helper';

import { resetDeck } from '../redux/card/card.actions';
import { incrementCard } from '../redux/card/card.actions';

const QuizPage = ({ 
                    currentDeck, 
                    currentCard,
                    incrementCard,
                    resetDeck 
                }) => {

    const nextCard = incrementCardHelper(currentDeck, currentCard);

    const savedHiScore = JSON.parse(localStorage.getItem("flashHiScore"));

    //Get high score
    useEffect(() => {
        if(!savedHiScore){
            setHiScore(0);
            localStorage.setItem("flashHiScore", JSON.stringify(0));
        } else {
            setHiScore(savedHiScore);
        }
    }, [savedHiScore]);

    //State for high score
    const [hiScore, setHiScore] = useState(0);

    // State for score
    const [score, setScore] = useState(0);

    // State for user-selected answer
    const [selectedOption, setSelectedOption] = useState(null);

    const handleRadioChange = (e) => {
        setSelectedOption(e.target.value)
    }

    // Logic for choosing correct and incorrect answers from current deck
    const wrongAnswers = currentDeck.cards.filter(card => card !== currentDeck.cards[currentCard]);
    const nextWrongAnswers = currentDeck.cards.filter(card => card !== currentDeck.cards[nextCard]);
    
    let randomUniqueNumbers = [];
    while(randomUniqueNumbers.length < 3){
        let x = Math.floor(Math.random() * wrongAnswers.length);
        if(!randomUniqueNumbers.includes(x)){
            randomUniqueNumbers.push(x);
        }
    }

    let wrong1 = wrongAnswers[randomUniqueNumbers[0]].Chinese;
    let wrong2 = wrongAnswers[randomUniqueNumbers[1]].Chinese;
    let wrong3 = wrongAnswers[randomUniqueNumbers[2]].Chinese;

    let nextWrong1 = nextWrongAnswers[randomUniqueNumbers[0]].Chinese;
    let nextWrong2 = nextWrongAnswers[randomUniqueNumbers[1]].Chinese;
    let nextWrong3 = nextWrongAnswers[randomUniqueNumbers[2]].Chinese;

    let initialAnswerKey = [
        wrong1, 
        wrong2, 
        currentDeck.cards[currentCard].Chinese, 
        wrong3
    ];

    let nextAnswerKey = [
        nextWrong1,
        nextWrong2,
        currentDeck.cards[nextCard].Chinese,
        nextWrong3
    ];

    function shuffleAnswers(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
        return array;
    }

    const [answerKey, setAnswerKey] = 
    useState(initialAnswerKey);

    // State for correct answer
    const [correctAnswer, setCorrectAnswer] = useState(currentDeck.cards[currentCard].Chinese);

    const handleQuizSubmit = (e) => {
        if(answerKey[selectedOption] === correctAnswer){
            alert("CORRECT");
            setScore( score + 100 );
            incrementCard(nextCard);
            setCorrectAnswer(currentDeck.cards[nextCard].Chinese);
            shuffleAnswers(nextAnswerKey);
            setAnswerKey(nextAnswerKey);
        } else {
            alert("INCORRECT");
            shuffleAnswers(initialAnswerKey);
            setAnswerKey(initialAnswerKey);
            setIncorrectGuesses( incorrectGuesses + 1 );
        }
    }

    //State for incorrect guesses
    const [incorrectGuesses, setIncorrectGuesses] = useState(0);

    // Logic for lose condition
    if(incorrectGuesses >= 3){
        const resetGame = async () => {
            try {
                await resetDeck();
                const oldHiScore = await(JSON.parse(localStorage.getItem("flashHiScore")));
                if(score > oldHiScore){
                    localStorage.setItem("flashHiScore", JSON.stringify(score));
                }
            } catch(error) {
                console.log(error);
            }
            try {
                setIncorrectGuesses(0);
                setScore(0);
                setCorrectAnswer(currentDeck.cards[currentCard].Chinese);
                setAnswerKey(initialAnswerKey);
            } catch(error) {
                console.log(error);
            }
        }
        resetGame();
        alert('GAME OVER! Please try again!');
    }        

    return (
        <div className="QuizPage">

            <FlashNavbar />

            <div className="QuizPageHeader">
                <h1>Quiz</h1>
                <div className="ScoreContainer">
                    <p>High Score: {hiScore}</p>
                    <p>Current Score: {score}</p>
                    <h4>Incorrect Guesses: {incorrectGuesses} / 3</h4>
                </div>
            </div>

            <div className='QuizCardContainer'>
                <Flashcard 
                    card={currentDeck.cards[currentCard]} 
                    isQuiz={true} 
                />
            </div>

            <div className="QuizAnswerContainer">
                <Form>
                    <FormGroup check>
                        <Label check>
                            <Input 
                                type="radio" 
                                name="radio1" 
                                value={0}
                                onChange={(e) => handleRadioChange(e)}
                            />{' '}
                            {answerKey[0]}
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input 
                                type="radio" 
                                name="radio1" 
                                value={1}
                                onChange={(e) => handleRadioChange(e)}
                            />{' '}
                            {answerKey[1]}
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input 
                                type="radio" 
                                name="radio1" 
                                value={2}
                                onChange={(e) => handleRadioChange(e)}
                            />{' '}
                            {answerKey[2]}
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input 
                                type="radio" 
                                name="radio1" 
                                value={3}
                                onChange={(e) => handleRadioChange(e)}
                            />{' '}
                            {answerKey[3]}
                        </Label>
                    </FormGroup>
                    <Button 
                        className="SubmitAnswerButton"
                        onClick={(e) => handleQuizSubmit(e)}
                    >
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    currentDeck: state.card.currentDeck,
    currentCard: state.card.currentCard
});

const mapDispatchToProps = dispatch => ({
    incrementCard: newCard => dispatch(incrementCard(newCard)),
    resetDeck: dispatch(resetDeck)
});

export default connect(
    mapStateToProps, 
    { 
        mapDispatchToProps,
        incrementCard,
        resetDeck
    }
)(QuizPage);