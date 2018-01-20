import React  from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import Home from './Home';
import NotFound from './NotFound';
import Challenge from './Challenge';
import NavMenu from './NavMenu';


const App = () => (
  <BrowserRouter>
    <div className="container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/challenges" component={Challenge} />
        <Route component={NotFound} />
      </Switch>
      <NavMenu />
    </div>

  </BrowserRouter>
);

export default App;
