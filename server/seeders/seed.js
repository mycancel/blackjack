const db = require('../config/connection');
const { Card, Deck } = require('../models');
const heartSeeds = require('./heartSeeds.json');

db.once('open', async () => {
  try {
    await Card.deleteMany({});
    await Card.create(heartSeeds);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  process.exit(0);
});
