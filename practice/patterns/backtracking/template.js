

var isValidState = function(state) {
  // check if state is true;
  return true;
}

var getCandidates = function(state) {
  return [];
}

var search = function(state, solutions) {
  if (isValidState(state)) {
    solutions.push(new Set(state));
    return;
  }

  const candidates = getCandidates(state);
  for (let i = 0; i < candidates.length; i++) {
    const candidate = candidates[i];
    state.add(candidate);
    search(state, solutions);
    state.remove(candidate);
  }
}

var solve = function() {
  const solutions = [];
  const state = new Set();
  search(state, solutions);
  return solutions;
}