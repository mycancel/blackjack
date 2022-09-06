const { Deck, Card } = require('../models');

const resolvers = {
  Query: {
    getDeck: async () => {
      const deck = await Deck.find().populate('cards').populate('inPlay');
      return deck;
    },
    drawCard: async (_, order) => {
      return Card.findOne({ order: order });
    }
  },

  Mutation: {

  }
};

module.exports = resolvers;
