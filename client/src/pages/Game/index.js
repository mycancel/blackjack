import React, { useEffect, useState } from 'react'
import { startGame } from '../../utils/helpers';
import Hand from '../../components/Hand';
import Dealer from '../../components/Dealer';
import Footer from '../../components/Footer'
import './Game.css';

// TODO: add persistence on refresh

const Game = () => { 
  // When the game starts, there will most likely be nothing in the local Storage,
  // Thus, the helper startGame will return an array of two numbers
  // However, if there is something stored, the stored array will populate the hands
  const playerAtStartOrRefresh = JSON.parse(localStorage.getItem('player')) || startGame();
  const dealerAtStartOrRefresh = JSON.parse(localStorage.getItem('dealer')) || startGame();

  // The hand will be what the player is holding (array of integers)
  const [hand, setHand] = useState(playerAtStartOrRefresh);
  // The dealer will be what the dealer is holding (array of integers)
  const [dealerHand, setDealer]= useState(dealerAtStartOrRefresh);
  // The Count state keeps record of the value of the dealers and players cards
  const [dealerCount, setDealerCount] = useState(0);
  const [playerCount, setPlayerCount] = useState(0);
  
  // When the value of hand changes, localStorage is updated
  useEffect(() => {
    // 'player' array is recieved from localStorage
    const player = JSON.parse(localStorage.getItem('player')) || [];
    // If what is stored in localStorage is not what is in the hand,
    if( !player.length || player.length < hand.length) {
      // localStorage is updated with the hand array
      localStorage.setItem('player', JSON.stringify(hand));
    }
  }, [hand]);

  // When the value of dealerHand changes, localStorage is updated in a similar way as 'hand'
  useEffect(() => {
    // 'dealer' array is recieved from localStorage
    const dealer = JSON.parse(localStorage.getItem('dealer')) || [];
    // If what is stored in localStorage is not what is in the dealerHand
    if( !dealer.length || dealer.length < dealerHand.length) {
      // localStorage is updated with the dealerHand array
      localStorage.setItem('dealer', JSON.stringify(dealerHand));
    }
  }, [dealerHand]);

  // TODO: Fix Duplication of values
  // When the value of dealerCount changes, localStorage is updated in a similar way as 'player'
  useEffect(() => {
    if (dealerCount) {
      const dValues = JSON.parse(localStorage.getItem('dValues')) || [];
      dValues.push(dealerCount);
      localStorage.setItem('dValues', JSON.stringify(dValues));
    }
  }, [dealerCount])

  // TODO: Fix Duplication of values
  // When the value of playerCount changes, localStorage is updated in a similar way as 'player'
  useEffect(() => {
    if (playerCount) {
      const pValues = JSON.parse(localStorage.getItem('pValues')) || [];
      pValues.push(playerCount);
      localStorage.setItem('pValues', JSON.stringify(pValues));
    }
  }, [playerCount])

  return (
    <>
      {/* TODO: Navigation bar for going back to the home page and tutorial*/}
      <main>
        <Dealer hand={dealerHand} setDealerCount={setDealerCount}/>
        <Hand hand={hand} setPlayerCount={setPlayerCount}/>
      </main>
      <Footer hand={hand} setHand={setHand}/>
    </>
  )
}

export default Game;