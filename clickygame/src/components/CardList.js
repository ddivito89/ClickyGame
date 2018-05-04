import React from "react";
import Card from "./Card";

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

const CardList = props => (
    <div className="p-2">
        {shuffle(props.cards).map(item => (
          <Card clickTest={props.clickTest} image={item.src} id={item.id} key={item.id}/>
        ))}
    </div>
    )

export default CardList
