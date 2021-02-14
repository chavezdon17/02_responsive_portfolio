import React from "react";
import CardInfo from "./CardInfo";

function Card(props) {
  return (
    <div
      className="d-inline-block b-card"
      onClick={(e) => props.click(props.item)}
    >
      <img
        className="b-card-image"
        src={props.item.imgSrc}
        alt={props.item.imgSrc}
      />
      {props.items.selected && (
        <CardInfo
          title={props.item.title}
          subTitle={props.item.subTitle}
          link={props.item.link}
        />
      )}
    </div>
  );
}

export default Card;
