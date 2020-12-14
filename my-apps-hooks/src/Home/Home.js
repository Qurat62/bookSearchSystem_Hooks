import React from 'react';
import {BrowserRouter as Router, Switch, Route,Link} from "react-router-dom";
import AutoSuggestion from './AutoSuggestion.js';

function App() {
  return (

    <React.Fragment>

      <header className="App-header">
      <div>
            <nav>
        <input type="checkbox" id="check"/>
        <label htmlFor="check" className="checkbtn">
            <i className="fas fa-bars"></i>
        </label>
        <label className="logo">VisionX</label>
        <ul>
            <li><Link className="active" to={"/Home/Home"}>Home</Link></li>
            <li><Link className="" >About</Link></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Feedback</a></li>
        </ul>
           </nav>
   
            
        </div>
      </header>     
   


<AutoSuggestion></AutoSuggestion>
    
         {/* <div className="footer-section brown-border">
             <small>© 2020 VisionX, Inc. All rights reserved.</small>
        </div> */}
        </React.Fragment>
  );
}

export default App;
  