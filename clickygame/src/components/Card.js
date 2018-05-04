import React from "react";


const Card = props => (
      <img onClick={()=>props.clickTest(props.id)} className="zoom" src={"images/" + props.image} id={props.id}/>
    )

export default Card
