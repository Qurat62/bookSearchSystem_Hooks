import React, {useState,useEffect} from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function AutoSuggestion()
{
const [books,setBooks]=useState([]);
const [userInput,setUserInput]=useState("");
const [error,setError]=useState('');
const [limitTo,setLimitTo]=useState(3);
const [title,setTitle]=useState("");
const [id,setid]=useState("");



useEffect(()=>{
    debugger;
fetch("https://www.googleapis.com/books/v1/volumes/?q=" + userInput)
.then((response)=> response.json())
.then((response)=>
{
    console.log(response.items);
    setBooks(response.items);
    
    setError('');
    

})
.catch((err) => {
    setBooks([]);
    setError("something went wrong");

  console.log(err);
});
},[userInput])

const handleInput = (e) => 
{
    debugger;

    setUserInput(e.target.value);

};
const onLoadMore = () => {

    setLimitTo(limitTo+3);
 
    
  };

  const resetInterval = () => setLimitTo(0);
const updateInputValue = (e) => {
    
    setUserInput(e.currentTarget.innerText);
    setid(e.target.id);
    setTitle(e.currentTarget.innerText);

  };
  const timeOut=()=>
  {
    setTimeout((function() {
        window.location.reload();
      }), 3000);
    
  }

return(

    <div>

<input type="search" value={userInput} onChange={handleInput}
className="inputStyle golden-color-border"/>
  
 <Link
        className="productButtonStyle button-color-brown"
        to={{
          pathname: "/Detail/Detail/" + title,
          state: {
            books: books,
            id: id,
          },
        }}
      >Search
      </Link>
      
<div className="suggestions">
    <ul>
    {books  && books.length === 0 && (
                <div className="suggestion">No Suggestions found</div>
              )}
    {books && books.length > 0
        ?
        
        books.slice(0,limitTo).map((item,index) => {
            let className;

            return <li  key={item.id} 
            title={item.volumeInfo.title}
            id={item.id}
            onClick={updateInputValue}
            >{item.volumeInfo.title}</li>;
          }) 
          
                 
        :  " "
        
        }

        {
       books && books.length >=limitTo 
       ? <button onClick={onLoadMore}>Load More</button>
         : <button onClick={resetInterval}>No Suggestions</button>
        }
        
         
    </ul>
</div>
       
    </div>
)


}
export default AutoSuggestion;