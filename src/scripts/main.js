'use strict';

// Uncomment the next lines to use your game instance in the browser
const Game = require('../modules/Game.class');
const game = new Game();

const start = document.querySelector('.button .start');
const field = document.querySelector('.game-field');
const score = document.querySelector('.game-score');
const message = {
  lose: document.querySelector('message-lose'),
  win: document.querySelector('message-win'),
  start: document.querySelector('message-start'),
};

start.addEventListener('click', () => {
  game.start();
});
