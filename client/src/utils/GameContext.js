import React, {createContext, useContext, useState } from 'react';

// Initialize new context for game
const GameContext = createContext();

// Custom hook to provide usage of the game context
export const useGameContext = () => useContext(GameContext);

export default function GameProvider ({ children }) {
  //The GameState effects the rendering of the Home page buttons and the reset of the game
  const [gameState, setGameState] = useState(false);
  // The turn state will determine who is able to be dealt cards (player starts on turn 1)
  const [turn, setTurn] = useState(1);

  const incrementTurn = () => {
    setTurn((prev) => prev + 1);
  }

  const startGameState = () => {
    setGameState(true);
  }

  const endGameState = () => {
    setGameState(false);
  }

  const resetGame = () => {
    setTurn(1);
  }

  return (
    <GameContext.Provider value={{ gameState, turn, endGameState, incrementTurn, startGameState, resetGame}}>
      {children}
    </GameContext.Provider>
  )
};