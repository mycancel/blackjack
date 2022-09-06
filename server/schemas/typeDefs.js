const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Deck {
    id: ID
    cards: [Card]
  }

  type Card {
    id: ID
    order: Number
    suit: String
    name: String
    value: [Number]
    frontImage: String
  }
`;

module.exports = typeDefs;
