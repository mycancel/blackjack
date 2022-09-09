const { Deck, Card } = require('../models');

const resolvers = {
  Query: {
    getDeck: async () => {
      const deck = await Deck.find().populate('cards').populate('inPlay');
      return deck;
    },
    drawCard: async (_, { order }) => {
      return Card.findOne({ order: order });
    }
  },

  Mutation: {
    removeFromShoe: async (_, { deckId, order }) => {
      const card = await Card.findOne({order: order});
      const deck = await Deck.findByIdAndUpdate(deckId, { $pull: { cards: card } });
      return deck;
    },
    addToInPlay: async (_, { deckId, order }) => {
      const card = await Card.findOne({order: order});
      const deck = await Deck.findByIdAndUpdate(deckId, { $push: { inPlay: card } });
      return deck;
    }
  }
};

module.exports = resolvers;
