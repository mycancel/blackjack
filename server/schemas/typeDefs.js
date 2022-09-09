const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Deck {
    id: ID
    cards: [Card]
    inPlay: [Card]
  }

  type Card {
    id: ID
    order: Int!
    suit: String!
    name: String!
    value: [Int]!
    frontImage: String!
  }

  type Query {
    getDeck: Deck
    drawCard(order:Int): Card
  }

  type Mutation {
    removeFromShoe(deckId:ID, order:Int): Deck
    addToInPlay(deckId:ID, order:Int): Deck
  }
`;

module.exports = typeDefs;
