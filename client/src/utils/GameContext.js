import React, {createContext, useContext, useState } from 'react';

// Initialize new context for game
const GameContext = createContext();

// Custom hook to provide usage of the game context
export const useGameContext = () => useContext(GameContext);

export const GameProvider = ({ children }) => {
  //The GameState effects the rendering of the Home page buttons and the reset of the game
  const [gameState, setGameState] = useState(false);
  // The turn state will determine who is able to be dealt cards (player starts on turn 1)
  const [turn, setTurn] = useState(1);
  // The Count state keeps record of the value of the dealers and players cards
  const [count, setCount] = useState({
    dealer: 0,
    player: 0,
  });
  // The Ace state keeps record of aces in dealers and players cards
  const [ace, setAce] = useState({
    dealerAces: 0,
    playerAces: 0
  })

  const addDealerCount = (value) => {
    const newDealer = count.dealer + value;
    console.log({
      dealer: newDealer,
      ...count.dealerAces,
      ...count.player,
      ...count.playerAces
    })
  };

  const addDealerAce = () => {
    const newAce = ace.dealer + 1;
    console.log({
      dealerAces: newAce,
      ...ace.playerAces
    })
  }

  const addPlayerAce = () => {
    const newAce = ace.player + 1;
    console.log({
      ...ace.dealerAces,
      playerAces: newAce
    })
  }

  const addPlayerCount = (value) => {
    const newPlayer = count.player + value;
    console.log({
      ...count.dealer,
      ...count.dealerAces,
      player: newPlayer,
      ...count.playerAces
    })
  }

  const incrementTurn = () => {
    setTurn((prev) => prev + 1);
  }

  const toggleGameState = () => {
    return setGameState((prev) => !prev);
  }

  const resetGame = () => {
    setCount({
      dealer: 0,
      player: 0,
    })
    setTurn(1);
  }

  return (
    <GameProvider.Provider value={{gameState, turn, count, ace,addDealerCount, addPlayerCount, addDealerAce, addPlayerAce,incrementTurn, toggleGameState, resetGame}}>
      {children}
    </GameProvider.Provider>
  )
};