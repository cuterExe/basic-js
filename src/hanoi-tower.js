module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const minTurns = Math.pow(2, disksNumber) - 1;
  return {
    turns: minTurns,
    seconds: Math.floor(minTurns / (turnsSpeed / 3600))
  };
};
