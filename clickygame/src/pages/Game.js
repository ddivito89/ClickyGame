import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Nav from "../components/Nav";
import CardList from "../components/CardList";

class Game extends Component{

state = {
  cards: [
    {
      id: 1,
      src: 'Arya.jpg'
    }, {
      id: 2,
      src: 'Bran.png'
    }, {
      id: 3,
      src: 'Brienne.png'
    }, {
      id: 4,
      src: 'Cersei.png'
    }, {
      id: 5,
      src: 'Daenerys.jpg'
    }, {
      id: 6,
      src: 'Jaime.jpg'
    }, {
      id: 7,
      src: 'JonSnow.png'
    }, {
      id: 8,
      src: 'Ned.jpg'
    }, {
      id: 9,
      src: 'Podrick.jpg'
    }, {
      id: 10,
      src: 'Sam.jpg'
    }, {
      id: 11,
      src: 'Sansa.jpg'
    }, {
      id: 12,
      src: 'Tyrion.jpg'
    }
  ],
  score: 0,
  topScore: 0,
  clicked:[],
  alert: 'Click an image to begin'
}

clickTest(id){
    console.log(this.state.clicked.indexOf(id))
    if(this.state.clicked.indexOf(id)>-1){
      this.setState(
        {
          score: 0,
          alert: 'You guessed Incorrectly :(',
          clicked: []
      })

    }else{
      this.setState(
        {
          score: this.state.score + 1,
          alert: 'You guessed Correctly!',
          topScore:(this.state.topScore < this.state.score + 1) ? this.state.score + 1:this.state.topScore,
          clicked: this.state.clicked.concat([id])
      })
    }
  }

  render(){
    return(
      <div>
        <Nav
          alert={this.state.alert}
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Container>
          <Row >
            <div className="d-flex justify-content-center game">
            <Col size="md-10">
                <CardList
                  clickTest={this.clickTest.bind(this)}
                  cards={this.state.cards}
                />
              </Col>
            </div>          
          </Row>
        </Container>
      </div>
    )
  }
}

export default Game
