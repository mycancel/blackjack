import React, { useEffect, useState } from 'react'
import { startGame } from '../../utils/helpers';
import Hand from '../../components/Hand';
import Dealer from '../../components/Dealer';
import Footer from '../../components/Footer'
import './Game.css';

// TODO: add persistence on refresh

const Game = () => { 
  // playerDraw will be used to represent the card(s) dealt to the player
  const [playerDraw, setPlayerDraw] = useState(startGame());
  // dealerDraw will be used to represent the card(s) dealt to the dealer
  const [dealerDraw, setDealerDraw] = useState(startGame());
  // The hand will be what the player is holding (array of integers)
  const [hand, setHand] = useState([]);
  // The dealer will be what the dealer is holding (array of integers)
  const [dealerHand, setDealer]= useState([]);
  // The Count state keeps record of the value of the dealers and players cards
  const [dealerCount, setDealerCount] = useState(0);
  const [playerCount, setPlayerCount] = useState(0);
  
  // When the value of playerDraw changes, localStorage is updated
  useEffect(() => {
    if (playerDraw) {
      // 'player' array is recieved from localStorage
      const player = JSON.parse(localStorage.getItem('player')) || [];
      // If playerDraw is an object, each element of the object is added to the 'player' array
      if (typeof playerDraw === 'object') playerDraw.forEach((num) => player.push(num));
      // If the playerDraw is not an object, it will be a number.
      // So that is added to the 'player' array
      else player.push(playerDraw);
      // Finally, localStorage is updated with the new 'player' array
      localStorage.setItem('player', JSON.stringify(player));
      // and the hand is set to the updated array from localStorage
      setHand(JSON.parse(localStorage.getItem('player')) || []);
    }
  }, [playerDraw]);

  // When the value of dealerDraw changes, localStorage is updated in a similar way as 'player'
  useEffect(() => {
    if (dealerDraw) {
      const dealer = JSON.parse(localStorage.getItem('dealer')) || [];
      if (typeof dealerDraw === 'object') dealerDraw.forEach((num) => dealer.push(num));
      else dealer.push(dealerDraw);
      localStorage.setItem('dealer', JSON.stringify(dealer));
      setDealer(JSON.parse(localStorage.getItem('dealer')));
    }
  }, [dealerDraw])

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
      <Footer setPlayerDraw={setPlayerDraw}/>
    </>
  )
}

export default Game;