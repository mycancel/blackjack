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
  // The Ace state keeps record of aces in dealers and players cards
  const [dealerAce, setDealerAce] = useState(0);
  const [playerAce, setPlayerAce] = useState(0);

  const incrementDealerAce = () => {
    setDealerAce((prev) => prev + 1);
  }

  const incrementPlayerAce = () => {
    setPlayerAce((prev) => prev + 1);
  }

  const incrementTurn = () => {
    setTurn((prev) => prev + 1);
  }

  const toggleGameState = () => {
    setGameState((prev) => !prev);
  }

  const resetGame = () => {
    setDealerAce(0);
    setPlayerAce(0);
    setTurn(1);
  }

  return (
    <GameContext.Provider value={{ gameState, turn, dealerAce, playerAce, incrementDealerAce, incrementPlayerAce, incrementTurn, toggleGameState, resetGame}}>
      {children}
    </GameContext.Provider>
  )
};