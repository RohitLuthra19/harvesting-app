import React from "react";
import MaterialIcon from "material-icons-react";
import "./Card.css";

const Card = props => {
  return (
    <div className="card">
      <div className="items">
        <div className="title">{props.title}</div>
        <div className="description">
          <span className="load">{props.load}</span>
          <span className="weight">{props.weight}</span>
        </div>
      </div>
      <div className="items right">
        <MaterialIcon icon="keyboard_arrow_right" />
      </div>
    </div>
  );
};

export default Card;
