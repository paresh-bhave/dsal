/**
 * https://leetcode.com/problems/number-of-islands
 */

var numIslands = function(grid) {
	let count = 0;
	const dfs = (grid, i, j) => {
		if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] == '0') {
			return;
		}
		grid[i][j] = "0";
		dfs(grid, i + 1, j); // down
		dfs(grid, i - 1, j); // up
		dfs(grid, i, j + 1); // right
		dfs(grid, i, j - 1); // left
	}

	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			if (grid[i][j] == "1") {
				count += 1;
				dfs(grid, i, j);
			}
		}
	}
	return count;
};