import { useState } from "react";
import "./App.css";

const cards = [
  {
    country: "Cameroon",
    capital: "Yaoundé",
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
  const [currentCard, setCurrentCard] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const nextCard = () => {
    let randomIndex;

    do {
      randomIndex = Math.floor(Math.random() * cards.length);
    } while (randomIndex === currentCard);

    setCurrentCard(randomIndex);
    setFlipped(false);
  };

  const card = cards[currentCard];

  return (
    <div className="app">
      <h1>African Countries & Capitals</h1>

      <p className="description">
        Test your knowledge of African countries and their capitals!
      </p>

      <h3>Total Cards: {cards.length}</h3>

      <div
        className="card-container"
        onClick={() => setFlipped(!flipped)}
      >
        <div
          className={`card-inner ${flipped ? "flipped" : ""}`}
        >
          <div className={`card-front ${card.difficulty.toLowerCase()}`}>
            <img src={card.image} alt={card.country} />
            <h2>{card.country}</h2>
            <p>Click to reveal the capital</p>
          </div>

          <div className={`card-back ${card.difficulty.toLowerCase()}`}>
            <img src={card.image} alt={card.country} />
            <h2>{card.capital}</h2>
            <p>Capital City</p>
          </div>
        </div>
      </div>

      <button onClick={nextCard}>Next Random Card</button>
    </div>
  );
}

export default App;