// cardsDisplay.js
import "./cardsDisplay.css";
import React, { useState } from "react";
import AppCard from "./appCard";
import OutcomeScreen from "./outcomeScreen";
import cardDict from "../cardDict";
import sampleArray from "../myFunctions";

function CardsDisplay(props) {
  // Create a card list
  const [cardPool] = useState([
    "Ace of Spades",
    "Two of Spades",
    "Three of Spades",
    "Four of Spades",
    "Five of Spades",
    "Six of Spades",
    "Seven of Spades",
    "Eight of Spades",
    "Nine of Spades",
    "Ten of Spades",
    "Ace of Hearts",
    "Two of Hearts",
    "Three of Hearts",
    "Four of Hearts",
    "Five of Hearts",
    "Six of Hearts",
    "Seven of Hearts",
    "Eight of Hearts",
    "Nine of Hearts",
    "Ten of Hearts",
  ]);

  const [cardList, setCardList] = useState(sampleArray(cardPool, 6));

  const [clickedCards, setClickedCards] = useState([]);

  const [loseState, setLoseState] = useState(false);

  const [winState, setWinState] = useState(false);
  // Cheat mode for debugging (you get to see clicked cards)
  const [cheat] = useState(false);

  // Function used to update score values for parent component
  const checkHighScore = (score) => {
    // If the current score is higher than high score, update high score
    if (props.highScoreValue < score) {
      props.highScoreFunction(score);
    }
  };

  const handleCardClick = (e) => {
    // Name of the card that was clicked
    const cardName =
      e.target.parentElement.parentElement.querySelector(
        ".card-text"
      ).textContent;
    // Check if card has been clicked
    if (clickedCards.includes(cardName)) {
      setLoseState(true);
      // Reset scores
      props.currentScoreFunction(0);
    } else {
      const newClickedCards = [...clickedCards, cardName];
      setClickedCards(newClickedCards);
      const nonClickedCards = cardPool.filter(
        (card) => !newClickedCards.includes(card)
      );
      // Update scores
      props.currentScoreFunction(props.currentScoreValue + 1);
      checkHighScore(props.currentScoreValue + 1);

      // Generate a valid, shuffled card list
      let shuffledCardList = sampleArray(cardPool, cardList.length);
      // Check that the shuffled card list is valid
      let possible = false;
      // If there is a non clicked card, then it's possible to guess correctly
      shuffledCardList.forEach((card) => {
        if (nonClickedCards.includes(card)) {
          possible = true;
        }
      });

      if (!possible) {
        console.log(shuffledCardList);
        // If there are no more nonClicked cards, win
        if (nonClickedCards.length == 0) {
          setWinState(true);
          // Exit if win
          return;
        } else {
          // Otherwise, get a valid card
          let sampledValidCard = sampleArray(nonClickedCards, 1)[0];
          // Replace last card with valid card
          let newShuffledCardList = [
            ...shuffledCardList.slice(0, cardList.length - 1),
            sampledValidCard,
          ];
          // Shuffle the array
          shuffledCardList = sampleArray(newShuffledCardList, cardList.length);
        }
      }
      // Update the cardList
      setCardList(shuffledCardList);
    }
  };

  const resetGame = () => {
    // Reset lose state
    setLoseState(false);
    setWinState(false);
    // Reset cardList and clickedCards
    setClickedCards([]);
    // Shuffle the cards and reset cardList
    setCardList(sampleArray(cardPool, cardList.length));
  };

  return (
    <div className="cards-display">
      <OutcomeScreen
        lose={loseState}
        win={winState}
        resetFunction={resetGame}
      />
      <div className="card-list">
        {cardList.map((cardName) => {
          return (
            <AppCard
              key={cardName}
              cardSymbol={cardDict[cardName]}
              cardText={cardName}
              clickFunction={handleCardClick}
            />
          );
        })}
      </div>
      <div
        className="card-list clicked-cards"
        style={{ display: cheat ? "inline-grid" : "none" }}
      >
        {clickedCards.map((cardName) => {
          return (
            <AppCard
              key={`clicked-${cardName}`}
              cardSymbol={cardDict[cardName]}
              cardText={cardName}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CardsDisplay;
