import React, { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

// first page
const Jumbo = () => {
  return (
    <section className="jumbo-container">
      <h1 className="jumbo-text">Oludamola Oni</h1>
      <p className="jumbo-mini-text">AltSchool Assignment 2</p>
      <Link to="/apicall">
        <button>Click me</button>
      </Link>
    </section>
  );
};

//second page
function ApiCall() {
  function ApiCallCode() {
    fetch("https://www.boredapi.com/api/activity")
      .then((response) => response.json())
      .then((data) => setProfile(data.profile));
  }

  const [profile, setProfile] = useState(["Go home"]);

  useEffect(() => {
    ApiCallCode();
  });

  console.log(profile);

  return (
    <section>
      <Link to="/">
        <button>Back</button>
      </Link>

      <div>{profile}</div>
    </section>
  );
}

function App() {
  return (
    <section className="main-container">
      <Routes>
        <Route path="/" element={<Jumbo />} />
        <Route path="/apicall" element={<ApiCall />} />
      </Routes>
    </section>
  );
}

export default App;

/*
Alright. Here we go with this assignment. 

* Create content like a blog format. Different contents in
a list format
* Each component will have a link that uses react-router
* Create a 404 page for when a wrong link is used
* Find out and setup error boundary
* use pagination to scroll through con
* implement accessibility 
* implement disabled state
* API loading states


*/
