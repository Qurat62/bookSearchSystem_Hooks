import React  from 'react';
import {Link } from 'react-router-dom';
import './styles.css';
function Menu()
{

return(
<header className="App-header">
      <div>
            <nav>
        <input type="checkbox" id="check"/>
        <label htmlFor="check" className="checkbtn">
            <i className="fas fa-bars"></i>
        </label>
        <label className="logo">VisionX</label>
        <ul>
            <li><Link className="active" to={"/Home/"}>Home</Link></li>
            <li><Link className="" >About</Link></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Feedback</a></li>
        </ul>
           </nav>
   
            
        </div>
      </header>     
)
}

export default Menu;