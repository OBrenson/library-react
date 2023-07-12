import logo from './logo.svg';
import './App.css';
import {data} from './mock/domain'
import React from "react";
import Book from "./components/Book";

function getData() {
  return data;
}

function App() {

  let booksList = [];
  let rowsList = [];
  let books = getData()
  let nlMarker = Math.floor(window.innerWidth / 170);
  books.forEach((book, index) => {
    booksList.push(<Book value={book} />);
    if(index === nlMarker - 1 || index === books.length -1) {
      let tmp = [...booksList.slice()]
      rowsList.push(<div className="row"> {tmp} </div>);
      booksList = [];
    }
  })

  return (
    <div className="main">
      <div className="navbar">

      </div>
        {
            rowsList
        }
    </div>
  );
}

export default App;