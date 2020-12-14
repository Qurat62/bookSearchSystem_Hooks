import React, { Componen} from "react";

import {BrowserRouter as Router, Switch, Route,Link} from "react-router-dom";

const Detail = (props) => {

    
    const { books, id } = props.location.state;
 

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
   

    <div className="card-container">
        
  
  
       <div>
            {props.location.state.books !==undefined
            ?
            props.location.state.books.filter(
                (book) =>
                  book.id === props.location.state.id
              )
              .map((filteredBook) => (
                <div>
                  <div className="grid-detail">
                    <img
                      src={
                        filteredBook.volumeInfo.imageLinks !== undefined
                          ? filteredBook.volumeInfo.imageLinks.thumbnail
                          : ""
                      }
                    ></img>
                  </div>
                  <div className="grid-detail">
                    <h3>Title: 
                        {filteredBook.volumeInfo.title!==undefined
                        ?
                        filteredBook.volumeInfo.title
                        :
                        "No title to show"
                        }</h3>
                    <h4>Author: {

                    filteredBook.volumeInfo.authors!==undefined
                    ?
                    filteredBook.volumeInfo.authors
                    :
                    "No authors to show"
                    
                    }</h4>
                    <h5>Publisher:
                         {
                         filteredBook.volumeInfo.publisher !== undefined
                         ? filteredBook.volumeInfo.publisher 
                         : "No publisher to show"
                         
                         }</h5>
                    <h5>
                      Published Date: 
                      {filteredBook.volumeInfo.publishedDate!==undefined
                      ?
                      filteredBook.volumeInfo.publishedDate
                      :
                      "No date to show"
                      
                      }
                    </h5>
                  </div>

                  <p>
                  Description:    
                  {filteredBook.volumeInfo.description !== undefined
                          ? 
                      filteredBook.volumeInfo.description
                      : "No description to show"
                  }
                  </p>
                </div>
              )):
              
              "No detail to show"
              
              }
         
         
         
         
         
         
         </div>
    
    
    
    </div>
   </React.Fragment>
   
   );
}
export default Detail;
