import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <h1>Toy Factory</h1>

        <div>
          
          <h3 id="playerName">Player1</h3>
          <img src="helper.gif">
          <p id="playerScore">Score: 0</p>
          
        </div>

        <div id="toyView">
         
          <p> click anywhere to create a toy</p>
          <p> click any toy to wrap it up</p>
          <p> click bag toy to send them to Santa!</p>
        </div>  

        <div>
          <button id="toyMakerButton">Bag Toys</button>
        </div>
      </div>
    );
  }
}