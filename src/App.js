import React, { useEffect } from 'react';
import './App.css';
import DeckPreview from './DeckPreview/DeckPreview';
import HomePage from './HomePage/HomePage';
import StudyPage from './StudyPage/StudyPage';
import DeckList from './DeckList/DeckList';
import QuizPage from './QuizPage/QuizPage';
import VerifyRoute from './VerifyRoute/VerifyRoute';
import VerifyQuizRoute from './VerifyRoute/VerifyQuizRoute';

import { connect } from 'react-redux';

import { 
  setDecks, 
  addCard, 
  setDeck 
} from './redux/card/card.actions';

import FLASHCARD_DATA from './DeckPreview/FLASHCARD_DATA';
import FLASHCARD_DATA_2 from './DeckPreview/FLASHCARD_DATA_2';
import FLASHCARD_DATA_3 from './DeckPreview/FLASHCARD_DATA_3';


import { Switch, Route } from 'react-router-dom';

function App({ setDecks, setDeck, addCard }) {

  const initialDecks = [FLASHCARD_DATA, FLASHCARD_DATA_2, FLASHCARD_DATA_3];
  
  useEffect(() => {
    async function getSavedDecks(){
      try{
        const savedDecks = JSON.parse(window.localStorage.getItem("decks"));
        if(!savedDecks){
          setDecks(initialDecks);
          setDeck(initialDecks[0]);
          localStorage.setItem("decks", JSON.stringify(initialDecks));
        } else {
          setDecks(savedDecks);
          setDeck(savedDecks[0]);
        }
      } catch(err) {
        console.log(err.message);
      }
    }
    getSavedDecks();
  }, [initialDecks, setDecks, setDeck, addCard]);


  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path='/'
          component={HomePage}
        />
        <Route
          path='/decklist'
          render={() => 
            <DeckList 
              initialDecks={initialDecks} 
            />
          }
        />
        <Route
          path='/deckpreview'
          exact
          render={() => 
            <DeckPreview 
              initialDecks={initialDecks}
            />
          }
        />
        <VerifyRoute
          path='/study'
          exact
          component={StudyPage}
          cardMin={0}
        />
        <VerifyQuizRoute
          path='/quiz'
          exact
          component={QuizPage}
        />
      </Switch>
    </div>
  );
}

export default connect(
  null, 
  { 
    setDecks, 
    setDeck, 
    addCard 
  }
)(App);
