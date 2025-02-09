'use strict';

let randomnum = 16;
let score = 20;
let hscore = [];

const highScore = score => {
  let high = 0;
  hscore.push(score);
  for (let i = 0; i < hscore.length; i++) {
    if (hscore[i] > high) {
      high = hscore[i];
    }
  }
  return high;
};

document.querySelector('.again').addEventListener('click', function () {
  let num = Math.random() * 20;
  randomnum = Math.floor(num);
  score=20;
  document.querySelector('.score').textContent = '20';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = null;
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  console.log(score);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';
  } else {
    if (guess > randomnum) {
      score -= 1;
      document.querySelector('.message').textContent = '📈 Number is bigger!';
      document.querySelector('.score').textContent = `${score}`;
    } else if (guess < randomnum) {
      score -= 1;
      document.querySelector('.message').textContent = '📉 Number is smaller!';
      document.querySelector('.score').textContent = `${score}`;
    } else {
      if (score !== 20) {
        document.querySelector('.message').textContent =
          'Congrats Finally got correct answer🎉!!';
        document.querySelector('.guess').value = null;
        let high = highScore(score);
        document.querySelector('.highscore').textContent=`${high}`
    } else if (score === 20) {
        document.querySelector('.message').textContent =
        'Congrats got correct answer on First Try🎉🎉!!';
        document.querySelector('.guess').value = null;
        let high = highScore(score);
        document.querySelector('.highscore').textContent=`${high}`

      }
    }
  }
});
