import React from "react";
import Card from "./Card";


const CardList = props => (
    <div>
        {props.cards.map(item => (
          <Card image={item}/>
        ))}
    </div>
    )

export default CardList
