import React  from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import './App.css'

import Home from './Home';
import NotFound from './NotFound';
import Challenge from './Challenges/Containers/Challenge';
import NewChallenge from './AddChallenge/Containers/NewChallenge';
import NavMenu from './Menu/NavMenu';


const App = () => (
  <BrowserRouter>
    <div className="container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/challenges" component={Challenge} />
        <Route path="/new" component={NewChallenge} />
        <Route component={NotFound} />
      </Switch>
      <NavMenu />
    </div>

  </BrowserRouter>
);

export default App;
