import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Nav from "../components/Nav";
import CardList from "../components/CardList";

class Game extends Component{

  state = {
    cards: ['Arya.jpg','Bran.png','Brienne.png','Cersei.png','Daenerys.jpg','Jaime.jpg','JonSnow.png','Ned.jpg','Podrick.jpg','Sam.jpg','Sansa.jpg','Tyrion.jpg'],
    wins:0,
    record:0
  }

  render(){
    return(
      <div>
        <Nav />
        <Container>
          <Row >
            <Col size="md-8" className="col-centered">
              <CardList cards={this.state.cards}/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Game
