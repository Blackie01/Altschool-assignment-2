import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "./Components/card";
import PageNotFound from "./Components/error404";
import { Routes, Route, Link } from "react-router-dom";

// first page
const Jumbo = () => {
  return (
    <section className="jumbo-container">
      <h1 className="jumbo-text">Oludamola Oni</h1>
      <p className="jumbo-mini-text">AltSchool Assignment 2</p>
      <Link to="/apicall">
        <button className="home-button">Click me</button>
      </Link>
    </section>
  );
};

//second page
function ApiCall() {
  // set state for the profiles
  const [profile, setProfile] = useState([]);

  // set state for the pages
  const [page, setPage] = useState(1)

  // reusable API call function
  const ReusableAPI = () =>{
    fetch("https://randomuser.me/api/?results=10")
    .then((response) => response.json())
    .then((json) => setProfile(json.results));
  }

  //API call with useEffect
  useEffect(() => {ReusableAPI()}, []);

  //function for the pagination
  const Pagination = (val) => {
    setPage(val)
    ReusableAPI()
  }

  // checking the functionality of pagination
  console.log(page)

  return (
    <section className="apipage-container">
      
      <Link to="/">
        <button className="backButton">Home</button>
      </Link>


      {profile.length === 0 && <h1 className="loader">Loading...</h1>} 

      <div className="card-container">
        {profile.map((user, i) => (
          <div key={i}>
          <Card userData={user} />
          </div>
        ))}
      </div>

      <div className="page-flex">
          <button className="btn" onClick={()=>Pagination(page-1)} disabled={page===1}>prev</button>
          <button className={`${page===1?'active':'btn'}`} onClick={()=>Pagination(1)} disabled={page===1}>1</button>
          <button className={`${page===2?'active':'btn'}`} onClick={()=>Pagination(2)} disabled={page===2}>2</button>
          <button className={`${page===3?'active':'btn'}`} onClick={()=>Pagination(3)} disabled={page===3}>3</button>
          <button className={`${page===4?'active':'btn'}`} onClick={()=>Pagination(4)} disabled={page===4}>4</button>
          <button className={`${page===5?'active':'btn'}`} onClick={()=>Pagination(5)} disabled={page===5}>5</button>
          <button className={`${page===6?'active':'btn'}`} onClick={()=>Pagination(6)} disabled={page===6}>6</button>
          <button className={`${page===7?'active':'btn'}`} onClick={()=>Pagination(7)} disabled={page===7}>7</button>
          <button className={`${page===8?'active':'btn'}`} onClick={()=>Pagination(8)} disabled={page===8}>8</button>
          <button className="btn" onClick={()=>Pagination(page+1)} disabled={page===8}>next</button>
      </div>
    </section>
  );
}

function App() {
  return (
    <section className="main-container">
      <Routes>
        <Route path="/" element={<Jumbo />} />
        <Route path="/apicall" element={<ApiCall />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </section>
  );
}

export default App;