import React from 'react';
import PropTypes from 'prop-types';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';

const App = (props) => {
  const {gameTime, errorCount} = props;
  const startGame = (evt) => {
    evt.preventDefault();
  };
  return <WelcomeScreen
    time={gameTime}
    errorCount={errorCount}
    onClick = {startGame}
  />;
};

App.propTypes = {
  gameTime: PropTypes.number,
  errorCount: PropTypes.number,
  startGame: PropTypes.func
};

export default App;
