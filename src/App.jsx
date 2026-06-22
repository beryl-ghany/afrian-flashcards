import { useState } from "react";
import "./App.css";

const initialCards = [
  {
    country: "Cameroon",
    capital: "Yaounde",
    difficulty: "Medium",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Flag_of_Cameroon.svg"
  },
  {
    country: "Nigeria",
    capital: "Abuja",
    difficulty: "Easy",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_Nigeria.svg"
  },
  {
    country: "Ghana",
    capital: "Accra",
    difficulty: "Easy",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Ghana.svg"
  },
  {
    country: "Kenya",
    capital: "Nairobi",
    difficulty: "Easy",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Kenya.svg"
  },
  {
    country: "Uganda",
    capital: "Kampala",
    difficulty: "Medium",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Flag_of_Uganda.svg"
  },
  {
    country: "Tanzania",
    capital: "Dodoma",
    difficulty: "Medium",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Tanzania.svg"
  },
  {
    country: "South Africa",
    capital: "Pretoria",
    difficulty: "Easy",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg"
  },
  {
    country: "Egypt",
    capital: "Cairo",
    difficulty: "Easy",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg"
  },
  {
    country: "Rwanda",
    capital: "Kigali",
    difficulty: "Medium",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_Rwanda.svg"
  },
  {
    country: "Djibouti",
    capital: "Djibouti City",
    difficulty: "Hard",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/34/Flag_of_Djibouti.svg"
  },
  {
    country: "Comoros",
    capital: "Moroni",
    difficulty: "Hard",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/94/Flag_of_the_Comoros.svg"
  },
  {
    country: "Lesotho",
    capital: "Maseru",
    difficulty: "Hard",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Flag_of_Lesotho.svg"
  }
];

function App() {
  const [cards, setCards] = useState(initialCards);
  const [currentCard, setCurrentCard] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const [guess, setGuess] = useState("");
  const [feedback, setFeedback] = useState("");

  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);

  const [masteredCards, setMasteredCards] = useState([]);

  const card = cards[currentCard];

  const checkAnswer = () => {
    const userGuess = guess.trim().toLowerCase();
    const correctAnswer = card.capital.trim().toLowerCase();

    if (userGuess === correctAnswer) {
      setFeedback("correct");

      const newStreak = currentStreak + 1;
      setCurrentStreak(newStreak);

      if (newStreak > longestStreak) {
        setLongestStreak(newStreak);
      }
    } else {
      setFeedback("wrong");
      setCurrentStreak(0);
    }
  };

  const nextCard = () => {
    if (currentCard < cards.length - 1) {
      setCurrentCard(currentCard + 1);
      resetCardState();
    }
  };

  const previousCard = () => {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1);
      resetCardState();
    }
  };

  const resetCardState = () => {
    setFlipped(false);
    setGuess("");
    setFeedback("");
  };

  const shuffleCards = () => {
    const shuffled = [...cards].sort(() => Math.random() - 0.5);

    setCards(shuffled);
    setCurrentCard(0);
    resetCardState();
  };

  const masterCard = () => {
    const mastered = cards[currentCard];

    setMasteredCards([...masteredCards, mastered]);

    const updatedCards = cards.filter(
      (_, index) => index !== currentCard
    );

    if (updatedCards.length === 0) {
      return;
    }

    setCards(updatedCards);

    if (currentCard >= updatedCards.length) {
      setCurrentCard(updatedCards.length - 1);
    }

    resetCardState();
  };

  if (cards.length === 0) {
    return (
      <div className="app">
        <h1>African Countries & Capitals</h1>
        <h2>All cards mastered!</h2>

        <p>
          Mastered Cards: {masteredCards.length}
        </p>
      </div>
    );
  }

  return (
    <div className="app">
      <h1>African Countries & Capitals</h1>

      <p className="description">
        Test your knowledge of African countries and their capitals!
      </p>

      <h3>Cards Remaining: {cards.length}</h3>

      <h3>
        Current Streak: {currentStreak} | Longest Streak: {longestStreak}
      </h3>

      <div
        className="card-container"
        onClick={() => setFlipped(!flipped)}
      >
        <div
          className={`card-inner ${
            flipped ? "flipped" : ""
          }`}
        >
          <div
            className={`card-front ${card.difficulty.toLowerCase()}`}
          >
            <img src={card.image} alt={card.country} />
            <h2>{card.country}</h2>
            <p>Click to reveal the capital</p>
          </div>

          <div
            className={`card-back ${card.difficulty.toLowerCase()}`}
          >
            <img src={card.image} alt={card.country} />
            <h2>{card.capital}</h2>
            <p>Capital City</p>
          </div>
        </div>
      </div>

      <input
        type="text"
        placeholder="Enter the capital city"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />

      <button onClick={checkAnswer}>
        Submit Guess
      </button>

      {feedback === "correct" && (
        <p className="correct">Correct!</p>
      )}

      {feedback === "wrong" && (
        <p className="wrong">Incorrect!</p>
      )}

      <div className="nav-buttons">
        <button
          onClick={previousCard}
          disabled={currentCard === 0}
        >
          Previous
        </button>

        <button
          onClick={nextCard}
          disabled={currentCard === cards.length - 1}
        >
          Next
        </button>
      </div>

      <div className="extra-buttons">
        <button onClick={shuffleCards}>
          Shuffle Cards
        </button>

        <button onClick={masterCard}>
          Master This Card
        </button>
      </div>
    </div>
  );
}

export default App;