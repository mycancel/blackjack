// Returns a single integer between 1 and 52
export const drawNumber = () => {
  return Math.ceil(Math.random() * 52);
}

// Returns a four card array of random integers between 1 and 52
export const startGame = () => {
  const startCards = [];
  while (startCards.length < 2) {
    const card = Math.ceil(Math.random() * 52);
    startCards.push(card);
  }
  return startCards;
}