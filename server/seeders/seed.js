const db = require('../config/connection');
const { Card, Deck } = require('../models');
const cardSeeds = require('./cardSeeds.json');

db.once('open', async () => {
  try {
    await Card.deleteMany({});
    await Deck.deleteMany({});
    const cards = await Card.create(cardSeeds);
    await Deck.create({
      cards: cards
    });

  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  process.exit(0);
});
