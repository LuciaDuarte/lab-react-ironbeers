import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

import HomeView from './views/HomeView';
import AllBeersView from './views/AllBeersView';
import SingleBeerView from './views/SingleBeerView';
import RandomBeerView from './views/RandomBeerView';
import NewBeerView from './views/NewBeerView';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomeView} exact />
          <Route path="/beers" component={AllBeersView} exact />
          <Route path="/random-beer" component={RandomBeerView} exact />
          <Route path="/beers/:id" component={SingleBeerView} exact />
          <Route path="/new-beer" component={NewBeerView} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
