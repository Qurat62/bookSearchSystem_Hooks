import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";

function AutoSuggestion() {
  const [books, setBooks] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [error, setError] = useState("");
  const [limitTo, setLimitTo] = useState(3);
  const [id, setid] = useState("");

  //rface shortcut

  useEffect(() => {
    fetch("https://www.googleapis.com/books/v1/volumes/?q=" + userInput)
      .then((response) => response.json())
      .then((response) => {
        
        setBooks(response.items);

        setError("");
      })
      .catch((err) => {
        setBooks([]);
        
        setError("something went wrong");
        alert("error:",error);

        console.log(err);
      });
  }, [userInput]);

  const handleInput = (e) => {
    if (e.target.value === "") {
      setUserInput("");
    } else {
      setUserInput(e.target.value);
      setLimitTo(3);
    }
  };
  const onLoadMore = () => {
    setLimitTo(limitTo + 3);
  };

  const resetInterval = () => setLimitTo(3);
  const updateInputValue = (e) => {
    setUserInput(e.currentTarget.innerText);
    setid(e.target.id);
  };

  return (
    <div>
      <input
        type="search"
        value={userInput}
        onChange={handleInput}
        className="inputStyle golden-color-border"
      />

      {/* <Link
        to={{
          pathname: `/Detail/${id}`,
        }}
      >
        <button
          className="productButtonStyle button-color-brown"
          key={userInput}
          disabled={userInput.length >= 1 ? false : true}
        >
          Search
        </button>
      </Link> */}

      <div className="suggestions">
        <ul>
          {books && books.length === 0 ? (
            <div className="suggestion">No Suggestions found</div>
          ) : (
            books &&
            books.slice(0, limitTo).map((item, index) => {
              return (
                <li
                  key={item.id}
                  title={item.volumeInfo.title}
                  id={item.id}
                  onClick={updateInputValue}
                >
                  {/* {item.volumeInfo.title} */}
                  {item.volumeInfo !== undefined &&
                  item.volumeInfo.title !== undefined ? (
                    <Link
                      to={{
                        pathname: `/Detail/${item.id}`,
                        state: { Book: item },
                      }}
                    >
                      {item.volumeInfo !== undefined &&
                      item.volumeInfo.title !== undefined
                        ? item.volumeInfo.title
                        : "No title found"}
                    </Link>
                  ) : (
                    ""
                  )}
                </li>
              );
            })
          )}

          {books && books.length >= limitTo ? (
            <button onClick={onLoadMore}>Load More</button>
          ) : (
            <label onClick={resetInterval}>No Suggestions</label>
          )}
        </ul>
      </div>
    </div>
  );
}
export default AutoSuggestion;
