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
  // The Count state keeps record of the value of the dealers and players cards
  const [dealerCount, setDealerCount] = useState(0);
  const [playerCount, setPlayerCount] = useState(0);
  // The Ace state keeps record of aces in dealers and players cards
  const [dealerAce, setDealerAce] = useState(0);
  const [playerAce, setPlayerAce] = useState(0);

  const addDealerCount = (value) => {
    const newDealer = value + dealerCount;
    setDealerCount(newDealer);
    console.log(dealerCount);
  };

  const addPlayerCount = (value) => {
    const newPlayer = value + playerCount;
    setPlayerCount(newPlayer);
    console.log(playerCount);
  }

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
    setDealerCount(0);
    setPlayerCount(0);
    setDealerAce(0);
    setPlayerAce(0);
    setTurn(1);
  }

  return (
    <GameContext.Provider value={{ gameState, turn, dealerCount, dealerAce, playerCount, playerAce, addDealerCount, addPlayerCount, incrementDealerAce, incrementPlayerAce, incrementTurn, toggleGameState, resetGame}}>
      {children}
    </GameContext.Provider>
  )
};