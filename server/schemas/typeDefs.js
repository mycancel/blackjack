const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Deck {
    id: ID
    cards: [Card]
    inPlay: [Card]
  }

  type Card {
    id: ID
    order: Int
    suit: String
    name: String
    value: [Int]
    frontImage: String
  }

  type Query {
    getDeck: [Deck]
    drawCard(order:Int): Card
  }

  type Mutation {
    addToInPlay(deckId:ID!, order:Int!): Card
    resetDeck(deckId:ID!): Deck
  }
`;

module.exports = typeDefs;
