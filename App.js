import React from 'react';

import Game from './src/components/Game';

class App extends React.Component {
  state = {
    gameId: 1,
  };
  resetGame = () => {
    this.setState((prevstate) => {
      return {gameId: prevstate.gameId + 1};
;    });
  };
  render() {
    return (
      <Game key={this.state.gameId } 
            onPlayAgain={this.resetGame}
            randomNumberCount={6} 
            initialSeconds={10}
      />
    );
  }
}
export default App;