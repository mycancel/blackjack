import React, { useEffect, useState } from 'react'
import { drawNumber, startGame } from '../../utils/helpers';
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
  // The turn state will determine who is able to be dealt cards (player starts on turn 1)
  const [turn, setTurn] = useState(1);
  
  // When the value of playerDraw changes, localStorage is updated
  useEffect(() => {
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
  }, [playerDraw]);

  // When the value of dealerDraw changes, localStorage is updated in a similar way as 'player'
  useEffect(() => {
    const dealer = JSON.parse(localStorage.getItem('dealer')) || [];
    if (typeof dealerDraw === 'object') dealerDraw.forEach((num) => dealer.push(num));
    else dealer.push(dealerDraw);
    localStorage.setItem('dealer', JSON.stringify(dealer));
    setDealer(JSON.parse(localStorage.getItem('dealer')));
  }, [dealerDraw])

  return (
    <>
      {/* TODO: Navigation bar for going back to the home page and tutorial*/}
      <main>
        <Dealer hand={dealerHand} turn={turn}/>
        <Hand hand={hand} />
      </main>
      {/* TODO: Footer that tallies up the value of points from the player and dealer */}
      <Footer 
        setPlayerDraw={setPlayerDraw} 
        setTurn={setTurn} 
        turn={turn}/>
    </>
  )
}

export default Game;