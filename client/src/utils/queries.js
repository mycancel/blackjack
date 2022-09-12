import { gql } from '@apollo/client';

export const QUERY_GET_DECK = gql`
  query GetDeck {
    getDeck {
      id
      cards {
        order
      }
      inPlay {
        order
      }
    }
  }
`;

export const QUERY_DRAW_CARD = gql`
  query DrawCard($order: Int!) {
    drawCard(order: $order) {
      order
      suit
      name
      value
      frontImage
    }
  }
`;
