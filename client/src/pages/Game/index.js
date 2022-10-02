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

  // The endGame state indicates when the Reset component is revealed to the player
  const [endGame, setEndGame] = useState(false);

  const [blackJack, setBlackJack] = useState(false);
  console.log(blackJack);

  const showReset = () => {
    let time = 1;
    const timeInterval = setInterval(function () {
      -- time;
      if (time === 0) {
        clearInterval(timeInterval);
        setEndGame(true);
      }
    }, 1000)
  }

  useEffect(() => {
    if (blackJack) showReset();
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
    } else if (turn === 2) {
      incrementTurn();
    }
    // When the dealer's turn ends, the game ends.
    else if (turn === 3) {
      showReset();
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
    if (hand.length === 2 && playerTotal === 21) setBlackJack(true);
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