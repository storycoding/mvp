import React from 'react';
import ReactDOM from 'react-dom';
let Path = require('path');
let $ = require('jquery');
let axios = require('axios');

class App extends React.Component {

  constructor(props) {

    console.log('app initiated');

    let userPrompt = prompt('what is your name?');

    while(userPrompt.length < 1) {
      userPrompt = prompt('what is your name?');
    }

    super(props);
    
    this.state = {
      score: 0,
      toys: 0,
      presents: 0,
      username: userPrompt || 'player1',
      highScore: [
        {username: 'Nuno', score: 9},
        {username: 'Aaron', score: 12},
        {username: 'Larry', score: 14}
      ]
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

    let appAlias = this;

    if (this.state.presents < 1) {
      console.log(`You don't have any presents ready to bag.`)

    } else {
      this.setState({score: this.state.score += this.state.presents, presents: this.state.presents = 0});

      let postData = {
        'username' : this.state.username,
        'score' : this.state.score
      }
      
      console.log('postData score = ', postData.score);

      axios.post('/scoreboard', postData)
      .then(function (response) {
        console.log(response);
        
        console.log('preparing get request to /scoreboard');


        axios.get('/scoreboard')
          .then(function (response) {
            response.data.pop()//getting that last function out
            appAlias.setState({highScore: response.data});            
            console.log('response: ', response);
            console.log('app.state.highScore: ', appAlias.state.highScore);
        })
        .catch(function (error) {
          console.log('axios get /scoreboard error: ', error);
        });


        console.log('get request to /scoreboard finished');



        
      })
      .catch(function (error) {
        console.log(error);
      });

    }

  }
  
  render() {

    return (
      <div className="app">

        <div>
          
          <h3 id="playerName">{this.state.username}</h3>
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

        <HighScore score={this.state.highScore} />
      </div>
    );
  }
}





class HighScore extends React.Component {
  constructor(props) {
    super(props);
    console.log('props: ', props.score);

    // this.state = {
    //   highscore: props.score
    // }
  }

  render() {

    const scores = this.props.score.map((user, index) =>
      <div key={index}> 
        <span>{user.username}: {' '}</span>
        <span>{user.score}</span>
      </div>
    );

    return (
      <div>
        <h3>Highscore</h3>
        <div>{scores}</div>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))