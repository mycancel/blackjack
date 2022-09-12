import { gql } from '@apollo/client';

export const ADD_TO_IN_PLAY = gql`
  mutation AddToInPlay($deckId: ID!, $order: Int!) {
    addToInPlay(deckId: $deckId, order: $order) {
      id
      order
      suit
      name
      value
      frontImage
    }
  }
`;

export const RESET_DECK = gql`
  mutation ResetDeck($deckId: ID!) {
    resetDeck(deckId: $deckId) {
      id
      cards {
        order
      }
    }
  }
`;