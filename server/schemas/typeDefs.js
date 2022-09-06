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
    drawCard(order:Number!): Card
  }

  type Mutation {
    removeFromShoe(id:ID, order:Number): Deck
    addToInPlay(id:ID, order:Number): Deck
  }
`;

module.exports = typeDefs;
