import React, { Component} from "react";

import {BrowserRouter as Router, Switch, Route,Link} from "react-router-dom";

const Detail = (props) => {    
const detail = props.location.state.Book;

  return (
    <React.Fragment>
    <div className="card-container">
        {console.log("detail",detail)}
  
   {
  detail!==undefined && detail.volumeInfo!==undefined?
  (
    <div>
      <img
            
            src={
              detail.volumeInfo !== undefined &&
              detail.volumeInfo.imageLinks !== undefined
                ? detail.volumeInfo.
                imageLinks.smallThumbnail
                : "No image loaded"
            }
          ></img>
           {detail.volumeInfo !== undefined ? 
           (
              <h2>{detail.volumeInfo.title}</h2>
            ) : (
              "No title found"
            )}

{detail.volumeInfo.authors !== undefined ? 
           (
              <h4>{detail.volumeInfo.authors}</h4>
            ) : (
              "No author found"
            )}

{detail.volumeInfo !== undefined ? 
           (
              <p>{detail.volumeInfo.description}</p>
            ) : (
              "No description found"
            )}
    </div>
  
  )
  :
 "No detail found !"
 } 
    
                     
    
    </div>
   </React.Fragment>
   
   );
}
export default Detail;
