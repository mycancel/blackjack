import React, { useEffect, useState } from 'react'
import { drawNumber, startGame } from '../../utils/helpers';
import Hand from '../../components/Hand';
import Dealer from '../../components/Dealer';
import Footer from '../../components/Footer'
import Nav from '../../components/Nav'
import Reset from '../../components/Reset'
import './Game.css';
import { useGameContext } from '../../utils/GameContext';

const Game = () => { 
  const { turn, incrementTurn } = useGameContext();
  // When the game starts, there will most likely be nothing in the localStorage,
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

  // The endGame state indicates when the Reset component is revealed to the player
  const [endGame, setEndGame] = useState(false);
  // The blackJack state = true when either the player or dealer is dealt 21 from the beginning
  // In this case the game ends early
  const [blackJack, setBlackJack] = useState(false);

  // Called to show the Reset component
  const showReset = () => {
    let time = 1;
    // timeInterval creates a timer to delay the Reset Component from appearing too soon
    const timeInterval = setInterval(function () {
      -- time;
      if (time === 0) {
        // After the timer is completed.
        clearInterval(timeInterval);
        // The endGame state is changed
        setEndGame(true);
      }
    }, 1000)
  }

  // If there is a blackJack, blackJack will be set to true
  useEffect(() => {
    // showReset is called to end the game
    if (blackJack) showReset();
    return;
  }, [blackJack])

  // The Dealer's turn
  useEffect(() => {
    // TODO: fix dealer picking up more cards than needed
    // Once all of the dealer's cards are revealed (after the player's turn)
    // and if dealerTotal is less than 17,
    if (turn === 2 && dealerTotal < 17 && playerTotal <= 21) {
      // A new card (integer between 1 and 52) is drawn
      const arr = [...dealerHand];
      const num = drawNumber();
      // and pushed into a copy of the hand array
      arr.push(num);
      // which is then assigned to the dealerHand state
      setDealer(arr);
      return;
      // If the dealerTotal is greater than or equal to 17, 
    } else if (turn === 2) {
      // No more cards are drawn, and the game ends.
      showReset();
      return;
    }
  }, [dealerTotal, turn])
  
  // When the value of hand changes, localStorage is updated
  useEffect(() => {
    // 'player' array is recieved from localStorage
    const player = JSON.parse(localStorage.getItem('player')) || [];
    // If what is stored in localStorage is not what is in the hand,
    if( !player.length || player.length < hand.length) {
      // localStorage is updated with the hand array
      localStorage.setItem('player', JSON.stringify(hand));
    }
    // At the start of the game, if the total is 21, blackJack is set to true
    if (hand.length === 2 && playerTotal === 21) setBlackJack(true);
    // If the playerTotal goes above 21, The game ends.
    if (playerTotal > 21) {
      incrementTurn();
      showReset();
    }
  }, [hand, playerTotal]);

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
      <Nav dealerTotal={dealerTotal}/>
      <main>
        <Dealer hand={dealerHand} dealerLength={dealerHand.length} setDealerTotal={setDealerTotal} blackJack={blackJack} setBlackJack={setBlackJack}/>
        <Hand hand={hand} playerLength={hand.length} setPlayerTotal={setPlayerTotal} setBlackJack={setBlackJack}/>
      </main>
      <Footer hand={hand} setHand={setHand} playerTotal={playerTotal}/>
      {endGame? 
      <Reset dealer={dealerTotal} player={playerTotal} blackJack={blackJack}/> 
      : <></> }
    </>
  )
}

export default Game;