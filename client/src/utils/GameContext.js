// TODO: change localStorage Mechanic to Global State/Provider
import React, {createContext, useContext, useState } from 'react';

// Initialize new context for game
const GameContext = createContext();

// Custom hook to provide usage of the game context
export const useGameContext = () => useContext(GameContext);

export const GameProvider = ({ children }) => {

  return (
    <GameProvider.Provider >
      {children}
    </GameProvider.Provider>
  )
};