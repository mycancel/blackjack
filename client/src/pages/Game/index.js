import React, { useEffect, useState } from 'react'
import { startGame } from '../../utils/helpers';
import Hand from '../../components/Hand';
import Dealer from '../../components/Dealer';
import Footer from '../../components/Footer'
import './Game.css';

const Game = () => { 
  // When the game starts, there will most likely be nothing in the local Storage,
  // Thus, the helper startGame will return an array of two numbers
  // However, if there is something stored, the stored array will populate the hands/values
  const playerAtStartOrRefresh = JSON.parse(localStorage.getItem('player')) || startGame();
  const dealerAtStartOrRefresh = JSON.parse(localStorage.getItem('dealer')) || startGame();

  // The hand will be what the player is holding (array of integers)
  const [hand, setHand] = useState(playerAtStartOrRefresh);
  // The dealer will be what the dealer is holding (array of integers)
  const [dealerHand, setDealer]= useState(dealerAtStartOrRefresh);
  // The Total state keeps record of the value of the dealers and players cards
  const [dealerTotal, setDealerTotal] = useState(0);
  const [playerTotal, setPlayerTotal] = useState(0);
  
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

  return (
    <>
      {/* TODO: Navigation bar for going back to the home page and tutorial*/}
      {/* TODO: Add way for dealer to play their turn based on the value of their hand */}
      {/* TODO: Create win/bust condition (including natural win) and reset screen */}
      <main>
        <Dealer hand={dealerHand} dealerLength={dealerHand.length} setDealerTotal={setDealerTotal}/>
        <Hand hand={hand} playerLength={hand.length} setPlayerTotal={setPlayerTotal}/>
      </main>
      <Footer hand={hand} setHand={setHand}/>
    </>
  )
}

export default Game;