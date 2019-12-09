import React from 'react';
import { Header, Footer } from "./Components/Layout"
import { Route, Switch } from 'react-router-dom'
import Home from './Components/Home'
import SOF from './Components/StatementOfFaith'
import Events from "./Components/Events"

import './index.css'
function App() {
  return (


    <React.Fragment>
      <div id="main">
        <Header />
        <div id="content" >
          <Switch >
            <Route exact path="/" component={Home} />
            <Route exact path="/Home" component={Home} />
            <Route exact path="/SOF" component={SOF} />
            <Route exact path="/Events" component={Events} />
          </Switch>
        </div>
        <Footer />
      </div>


    </React.Fragment>

  );
}

export default App;
