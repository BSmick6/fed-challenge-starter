import React from "react";
import "./App.css";
import Card from "./Card";

function App() {
  const thumbs = [
    "lake-inniscarra-thumb.jpg",
    "performance-series-thumb.jpg",
    "slow-pulls-thumb.jpg",
    "20-minutes-to-toned-thumb.jpg",
    "charles-race-thumb.jpg",
    "full-body-hiit-thumb.jpg",
    "kafue-river-thumb.jpg",
    "shred-and-burn-thumb.jpg",
  ];
  return (
    <div className="App">
      {thumbs.map((image) => (
        <Card image={image} />
      ))}
    </div>
  );
}

export default App;
