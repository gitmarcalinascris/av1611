import React from 'react';
import { Header } from "./Components/Layout"
import { Route,Switch } from 'react-router-dom'

import Home from './Components/Home'
import SOF from './Components/StatementOfFaith'
import SPM from "./Components/StreetPreachingMinistries"
import SS from "./Components/ScheduleServices"
import ContactUs from "./Components/ContactUs";
import StudyLinks from "./Components/StudyLinks";
import './index.css'
function App() {
  return (


    <React.Fragment>
      <div id="main">
        <Header />
        <div id="content" >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Home" component={Home} />
            <Route path="/Services" component={SS} />
            <Route path="/ContactUs" component={ContactUs} />
            <Route path="/SOF" component={SOF} />
            <Route path="/SPM" component={SPM} />
            <Route path="/STL" component={StudyLinks} />
          </Switch>
        </div>
      </div>


    </React.Fragment>

  );
}

export default App;
