const { Schema, model } = require('mongoose');

const cardSchema = new Schema({
  order: {
    type: Number,
    required: true,
    unique: true,
  },
  suit: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  },
  frontImage: {
    type: String,
    required: true
  }
});

const Card = model('Card', cardSchema);

module.exports = Card;
