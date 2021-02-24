import React from "react";

function Card(props) {
  return (
    <div className="card">
      <img src={`images/${props.image}`} alt="" />
      <div className="lower-half">
        <div className="details"></div> <div className="trainer"> </div>
      </div>
    </div>
  );
}

export default Card;
