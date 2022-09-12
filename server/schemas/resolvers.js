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
    addToInPlay: async (_, { deckId, order }) => {
      const card = await Card.findOne({ order: order });
      await Deck.findByIdAndUpdate(deckId, { $pull: { cards: card._id } });
      await Deck.findByIdAndUpdate(deckId, { $push: { inPlay: card._id } });
      return card;
    },
    resetDeck: async (_, { deckId }) => {
      const { inPlay } = await Deck.findByIdAndUpdate(deckId, { $set: {inPlay: []} });
      const deck = await Deck.findByIdAndUpdate(deckId, { $push: {cards: {$each: inPlay} }}, { new: true });
      return deck.populate('cards');
    }
  }
};

module.exports = resolvers;
