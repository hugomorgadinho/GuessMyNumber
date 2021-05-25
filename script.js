'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉 Correct Number!';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//+++++++++++++++CHECK BUTTON+++++++++++++++

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //when there is no valid input
  if (!guess) {
    displayMessage('⛔ Esse não dá, vacão...');

    //++++++++++++++++WHEN PLAYER WINS++++++++++++++++++++
  } else if (guess === secretNumber) {
    displayMessage('🎉 Está ceeerta!');

    //Audio right answer
    let audio = new Audio('certa.mp3');
    audio.play();

    document.querySelector('.number').textContent = secretNumber;
    console.log(secretNumber);

    //Highscore
    if (score > highScore) {
      highScore = score;

      document.querySelector('.highscore').textContent = highScore;
    }

    document.querySelector('body').style.backgroundColor = ' #60b347';

    document.querySelector('.number').style.width = '30rem';

    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? 'É mais baixo, sua burra ou seu burro...😑'
          : 'É mais alto! Porra, que és o cúmulo da burrice 😆 '
      );

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 GAME OVER');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//+++++++++++++++AGAIN BUTTON+++++++++++++++

document.querySelector('.again').addEventListener('click', function () {
  //Background color
  document.querySelector('body').style.backgroundColor = '#222';
  //Get a new secret number
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  //Secret Number
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  //Message
  displayMessage('A ver se está certo');
  // Score
  score = 20;
  document.querySelector('.score').textContent = score;
  // Guess Field
  document.querySelector('.guess').value = '';
});
