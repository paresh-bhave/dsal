
/**
* https://leetcode.com/problems/word-search/description/
*/

/**
* @param {character[][]} board
* @param {string} word
* @return {boolean}
*/
var exist = function(board, word) {
  let result = false;
  var check = function(row, column, index) {
    if (!result) {
      if (row < 0 || column < 0 || row >= board.length || column >= board[0].length) return; // out of boundary
      if (board[row][column] != word[index]) return; // wrong character
      if (index == word.length - 1) { // got to the end means we found a correct path
        result = true;
        return;
      }
      board[row][column] = null; // mark our path so we dont go back and forth
      // try all directions
      check(row + 1, column, index+1);
      check(row - 1, column, index+1);
      check(row, column + 1, index+1);
      check(row, column - 1, index+1);
      board[row][column] = word[index]; // reset our board , very important
    }
  }
  
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] == word[0]) {
        check(i, j, 0);
        if (result) return result;
      }
    }
  }
  
  return result;
};