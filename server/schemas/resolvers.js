const { Deck, Card } = require('../models');

const resolvers = {
  Query: {
    getDeck: async () => {
      const deck = await Deck.find().populate('cards').populate('inPlay');
      return deck;
    },
    drawCard: async (_, { order }) => {
      return await Card.findOne({ order: order });
    }
  },

  Mutation: {
    removeFromShoe: async (_, { deckId, order }) => {
      const card = await Card.findOne({ order: order });
      await Deck.findByIdAndUpdate(deckId, { $pull: { cards: card._id } });
      return card;
    },
    addToInPlay: async (_, { deckId, order }) => {
      const card = await Card.findOne({ order: order });
      await Deck.findByIdAndUpdate(deckId, { $push: { inPlay: card._id } });
      return card;
    }
  }
};

module.exports = resolvers;
