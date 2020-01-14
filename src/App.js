import React from 'react';
import { Header } from "./Components/Layout"
import { Route, Switch } from 'react-router-dom'
import Home from './Components/Home'
import SOF from './Components/StatementOfFaith'
import Events from "./Components/Events"
import SPM from "./Components/StreetPreachingMinistries"

import './index.css'
function App() {
  return (


    <React.Fragment>
      <div id="main">
        <Header />
        <div id="content" >
          <Switch >
            <Route exact path="/" component={Home} />
            <Route path="/Home" component={Home} />
            <Route path="/SOF" component={SOF} />
            <Route path="/Events" component={Events} />
            <Route path="/SPM" component={SPM} />
          </Switch>
        </div>
      </div>


    </React.Fragment>

  );
}

export default App;
