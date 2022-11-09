import React, { useEffect, useState } from "react";
import './App.css';

const App = () => {
  const [Movie, setMovie] = useState("");

  const fetchData = async () => {
    const url = `http://www.omdbapi.com/?s=${document.getElementById('search').value}&apikey=a4b975cc`;
    const response = await fetch(url);
    const json = await response.json();
    var list = [];
    var search = json.Search;
    search.map((search) => {
      return (
        list.push(
          <div className="item">
            <img src={search.Poster} className="item2" width="auto" height="400px" />
            <div className="item1">{search.Title}</div>
            <div className="item1">{search.Year}</div>
          </div>
        )
      )
    })
    setMovie(list)
  };
  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className="text">
      <h1 className="title">FREE PIRRATED MOVIES</h1>
      <input type="default" id="search" defaultValue="Avengers" placeholder="Search.." name="search" />
      <button onClick={() => fetchData()} className="search">Submit</button>
      <div id="content">
        {Movie}
      </div>
    </div>

  );
};

export default App;
