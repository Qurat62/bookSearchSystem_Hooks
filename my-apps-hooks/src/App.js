import React  from 'react';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './styles.css';
import Menu from './menu.js'
import Home from './Home/Home.js';
import Detail from './Detail/Detail.js';


function App() {
  return (

    <div className="wrapper">
    <Menu/>
<Router>
    <Switch>
        <Route path="/Home" component={Home}/>
        <Route path="/Detail/" component={Detail}/>
    </Switch>
</Router>
    </div>
  
  );
}

export default App;
