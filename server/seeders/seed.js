const db = require('../config/connection');
const { Card, Deck } = require('../models');
const heartSeeds = require('./heartSeeds.json');
const diamondSeeds = require('./diamondSeeds.json');
const spadeSeeds = require('./spadeSeeds.json');
const clubSeeds = require('./clubSeeds.json');

db.once('open', async () => {
  try {
    await Card.deleteMany({});
    await Card.create(heartSeeds);
    console.log('hearts');
    await Card.create(diamondSeeds);
    console.log('diamonds');
    await Card.create(spadeSeeds);
    console.log('spades');
    await Card.create(clubSeeds);
    console.log('clubs');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  process.exit(0);
});
