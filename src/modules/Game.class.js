'use strict';

/**
 * This class represents the game.
 * Now it has a basic structure, that is needed for testing.
 * Feel free to add more props and methods if needed.
 */
class Game {
  /**
   * Creates a new game instance.
   *
   * @param {number[][]} initialState
   * The initial state of the board.
   * @default
   * [[0, 0, 0, 0],
   *  [0, 0, 0, 0],
   *  [0, 0, 0, 0],
   *  [0, 0, 0, 0]]
   *
   * If passed, the board will be initialized with the provided
   * initial state.
   */
  constructor(initialState) {
    this.board = initialState;
    this.score = 0;
    this.status = 'idle';

    // eslint-disable-next-line no-console
    console.log(initialState);
  }

  moveLeft() {}
  moveRight() {}
  moveUp() {}
  moveDown() {}

  /**
   * @returns {number}
   */
  getScore() {}

  /**
   * @returns {number[][]}
   */
  getState() {}

  /**
   * Returns the current game status.
   *
   * @returns {string} One of: 'idle', 'playing', 'win', 'lose'
   *
   * `idle` - the game has not started yet (the initial state);
   * `playing` - the game is in progress;
   * `win` - the game is won;
   * `lose` - the game is lost
   */
  getStatus() {}

  /**
   * Starts the game.
   */
  start() {
    this.board = this.createBoard();
    this.score = 0;
    this.status = 'playing';
    this.addNewCell();
    console.log('Start works');
  }

  createBoard() {
    const board = [];

    for (let i = 0; i < 4; i++) {
      const row = [];

      for (let j = 0; j < 4; j++) {
        row.push(0);
      }

      board.push(row);
    }

    return board;
  }

  addNewCell() {
    const cells = [];

    // eslint-disable-next-line no-shadow
    for (let row = 0; row < 4; row++) {
      // eslint-disable-next-line no-shadow
      for (let col = 0; col < 4; col++) {
        if (this.board[row][col] === 0) {
          cells.push({ row, col });
        }
      }
    }

    const randomCell = Math.floor(Math.random() * cells.length);
    const { row, col } = cells[randomCell];

    const randomNum = Math.random() < 0.8 ? 2 : 4;

    this.board[row][col] = randomNum;
  }

  /**
   * Resets the game.
   */
  restart() {}

  // Add your own methods here
}

module.exports = Game;
