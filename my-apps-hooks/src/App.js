import React  from 'react';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

 import './styles.css';

import Home from './Home/Home.js';
import Detail from './Detail/Detail.js';


function App() {
  return (

    <div className="wrapper">
    
<Router>
    <Switch>
        <Route path="/Home/Home" component={Home}/>
        <Route path="/Detail/Detail" component={Detail}/>
    </Switch>
</Router>
    </div>
  
  );
}

export default App;
