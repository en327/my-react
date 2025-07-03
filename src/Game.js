import { useState } from 'react';
import './App.css';

function Game() {
  const [num, setNum] = useState(0);
  const [message, setMessage] = useState(':)');
  const [animalMessage, setAnimalMessage] = useState(':)');
  const [userCard, setUserCard] = useState(drawCard());
  const [dealerCard, setDealerCard] = useState(drawCard());
  const [revealed, setRevealed] = useState(false);
  const [resultMessage, setResultMessage] = useState(':0');

  function drawCard() {
    return Math.floor(Math.random() * 10) + 1;
  }

  function handleGuess(guess) {
    const newDealerCard = drawCard();
    setDealerCard(newDealerCard);
    setRevealed(true);

    let result = '';
    if (userCard === newDealerCard) {
      result = "It's a tie!";
    } else if (
      (guess === 'higher' && userCard > newDealerCard) ||
      (guess === 'lower' && userCard < newDealerCard)
    ) {
      result = 'You win!';
    } else {
      result = 'You lose!';
    }

    setResultMessage(result);

    setTimeout(() => {
      setUserCard(drawCard());
      setDealerCard(drawCard());
      setRevealed(false);
      setResultMessage(':0');
    }, 2000);
  }

  const checkAnswer = () => {
    if (num === 3) {
      setMessage("You're right! :D");
    } else {
      setMessage(`It's not ${num}!`);
    }
  };

  const meow = new Audio(process.env.PUBLIC_URL + '/Sounds/short-meow-kitten-230900.mp3');

  const playSound = () => {
    meow.play().catch((e) => console.log('Playback failed:', e));
    setAnimalMessage('');
  };

  const handleAnswer = (animal) => {
    if (animal === 'cat') {
      setAnimalMessage('✅ Correct!');
    } else {
      setAnimalMessage('❌ Try again!');
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Rabbit Counter</h2>
        <p>How many rabbits do you see?</p>
        <p>🐰🐰🐱🦢🐱🐰</p>
        <div className="controls">
          <button onClick={() => setNum(num > 0 ? num - 1 : 0)}>-</button>
          <span className="num">{num}</span>
          <button onClick={() => setNum(num + 1)}>+</button>
        </div>
        <button onClick={checkAnswer}>Enter</button>
        <p>{message}</p>
      </div>

      <div className="card">
        <h2>Guess the Animal</h2>
        <p>Which animal made this sound?</p>
        <button onClick={playSound}>🔊 Play Sound</button>
        <div className="images">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/320px-Cat03.jpg"
            alt="Cat"
            onClick={() => handleAnswer('cat')}
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/97/Swallow-tailed_bee-eater_%28Merops_hirundineus_chrysolaimus%29.jpg"
            alt="Bird"
            onClick={() => handleAnswer('bird')}
          />
        </div>
        <p>{animalMessage}</p>
        <p style={{ fontSize: '12px' }}>
          Sound Effect by <a href="https://pixabay.com/sound-effects/short-meow-kitten-230900/" target="_blank" rel="noopener noreferrer">Alexander Jauk</a> from <a href="https://pixabay.com/sound-effects/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=230900" target="_blank" rel="noopener noreferrer">Pixabay</a>
        </p>
      </div>

      <div className="card">
        <h2>High or Low</h2>
        <p>Guess if your number (1–10) is higher or lower than the dealer’s!</p>
        <div className="card-area">
          <div className="playing-card">
            <p className="label">Your Card</p>
            <div className="card-face">{userCard}</div>
          </div>
          <div className="playing-card">
            <p className="label">Dealer's Card</p>
            <div className="card-face">
              {revealed ? dealerCard : '❓'}
            </div>
          </div>
        </div>
        <div className="guess-buttons">
          <button onClick={() => handleGuess('higher')}>Higher</button>
          <button onClick={() => handleGuess('lower')}>Lower</button>
        </div>
        <p>{resultMessage}</p>
      </div>
    </div>
  );
}

export default Game;
