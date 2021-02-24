import React from "react";
import "./App.css";
import Card from "./Card";
import cards from "./cardDummyData";

function App() {
  return (
    <div className="App">
      {cards.map((card, index) => (
        <Card key={index} card={card} />
      ))}
    </div>
  );
}

export default App;
