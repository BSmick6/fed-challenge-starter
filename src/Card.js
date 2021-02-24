import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <img
        src={`images/${props.card.thumb}`}
        alt={props.card.thumb}
        width={290}
        height={165}
      />
      <div className="lower-half">
        <div className="description">{props.card.description}</div>
        {props.card.playlist ? null : (
          <div className="stats">
            <i className="far fa-clock fa-xs"></i>
            {Math.floor(props.card.duration / 60)}:{props.card.duration % 60}
            <i className="far fa-eye fa-xs"></i>
            {props.card.views}
          </div>
        )}
        <img
          className="trainer"
          src={`images/${props.card.trainer}`}
          alt={props.card.trainer}
          width={28}
          height={28}
        />
      </div>
    </div>
  );
}

export default Card;
