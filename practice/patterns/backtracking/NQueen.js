/**
 * Backtracking: Decision Problem (Find Feasible Solution)
 * 
 * Given N x N chess board, Place M queens on the board such that no M queens can attack each other
 * 
 * Input = N = 4, M = 4
 * Output = [
 *  [0,1,0,0],
 *  [0,0,0,1],
 *  [1,0,0,0],
 *  [0,0,1,0]
 * ];
 * 
 * Where 1 is a queen
 */

const solveNQueen = function(n) {
  // prepare N X N array as a board
  const board = new Array(n);
  for (let i = 0; i < n; i++) {
    board[i] = new Array(n).fill(false);
  }

  const printBoard = () => {
    for (let i = 0; i < n; i++) {
      let str = "";
      for (let j = 0; j < n; j++) {
        let box = "[ ]";
        if (i - j === 0 || (i - j) % 2 === 0) {
          box = "[/]"
        }
        str += board[i][j] ? "[Q]" : box;
      }
      console.log(str);
    }
  }

  const canPlace = (i, j) => {
    // check the column
    for (let k = 0; k < i; k++) {
      if (board[k][j]) return false;
    }

    // check the left diagonal
    let x = i, y = j;
    while(x >= 0 && y >= 0) {
      if (board[x][y]) return false;
      x--;
      y--;
    }

    // check the right diagonal
    x = i, y = j;
    while(x >= 0 && y < n) {
      if (board[x][y]) return false;
      x--;
      y++;
    }

    return true;
  }

  const solve = (i) => {
    // base case
    if (i === n) {
      printBoard();
      return true;
    }
    // recursive case
    // try to replace a queen in every row
    for (let j = 0; j < n; j++) {
      // check if current position (i,j) is safe or not
      if (canPlace(i, j)) {
        // mark the position as Queen can be placed here
        board[i][j] = true;
        // check if the position makes a successful placement for the remaining board
        const success = solve(i + 1);
        if (success) {
          return true;
        }
        // if not, reset the Queen position
        board[i][j] = false;
      }
    }
    return false;
  }

  solve(0);
};

solveNQueen(8);
