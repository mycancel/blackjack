import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import Game from './pages/Game';
import Rules from './pages/Rules';
import GameProvider from './utils/GameContext';

const client = new ApolloClient({
  uri: '/graphQL',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <GameProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/game" element={<Game />} />
              <Route path="/rules" element={<Rules />} />
            </Routes>
          </GameProvider>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
