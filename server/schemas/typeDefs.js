const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Deck {
    id: ID
    cards: [Card]
    inPlay: [Card]
  }

  type Card {
    id: ID
    order: Number!
    suit: String!
    name: String!
    value: [Number]!
    frontImage: String!
  }

  type Query {
    getDeck: Deck
    drawCard(order:Number!): Card
  }

  type Mutation {
    removeFromShoe(deckId:ID, order:Number): Deck
    addToInPlay(deckId:ID, order:Number): Deck
  }
`;

module.exports = typeDefs;
