import React from 'react';
import { Header, Footer } from "./Components/Layout"
import { Route, Switch } from 'react-router-dom'
import Home from './Components/Home'



function App() {
  return (


    <React.Fragment>
      <div id="main">
        <Header />
        <div style={{backgroundColor:"gainsboro",height:"100%"}} >
          <Switch >
            <Route exact path="/" component={Home} />
            <Route path="/Home" exact component={Home} />
          </Switch>
        </div>
        <Footer />
      </div>


    </React.Fragment>

  );
}

export default App;
