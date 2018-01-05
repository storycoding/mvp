import React from 'react';
import ReactDOM from 'react-dom';
let Path = require('path');

class App extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      score: 0,
      toys: 0,
      presents: 0,
      username: undefined
    }
  }

  makeToy() {
    this.setState({toys: this.state.toys + 1});
  }

  wrapToy() {
    if (this.state.toys < 1) {
      console.log(`You don't have any toys left to bag.`)
    } else {
      this.setState({presents: this.state.presents + 1, toys: this.state.toys - 1});
    } 
  }
  
  bagToy() {
    if (this.state.presents < 1) {
      console.log(`You don't have any presents ready to bag.`)
    } else {
      this.setState({score: this.state.score + 1, presents: this.state.presents - 1});
    }
  }
  

  render() {

    return (
      <div className="app">

        <div>
          
          <h3 id="playerName">Player1</h3>
          <img src="/img/helper.gif"/>
          <p id="playerScore">Toys: {this.state.toys}</p>
          <p id="playerScore">Presents: {this.state.presents}</p>
          <p id="playerScore">Score: {this.state.score}</p>
          
        </div>

        <div id="toyView">

        </div>  

        <div>
          <button onClick={this.makeToy.bind(this)} id="toyMakerButton">Make Toys</button>
          <button onClick={this.wrapToy.bind(this)} id="toyWrapperButton">Wrap Toys</button>
          <button onClick={this.bagToy.bind(this)} id="toyBaggerButton">Bag Toys</button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))