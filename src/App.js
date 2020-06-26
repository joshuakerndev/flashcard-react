import React from 'react';
import './App.css';
import DeckPreview from './DeckPreview/DeckPreview';
import HomePage from './HomePage/HomePage';
import StudyPage from './StudyPage/StudyPage';

import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path='/'
          component={HomePage}
        />
        <Route
          path='/deckpreview'
          component={DeckPreview}
        />
        <Route
          path='/study'
          component={StudyPage}
        />
      </Switch>
    </div>
  );
}

export default App;
