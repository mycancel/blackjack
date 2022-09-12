import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'

const client = new ApolloClient({
  uri: '/graphQL',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
