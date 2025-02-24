const puzzles = [
  "530070000600195000098000060800060003400803001700020006060000280000419005000080079",
  "002008000060005010090000408000901002001000700500406000809000060040200090000600500",
];

/**
 * Medium 난이도 퍼즐을 랜덤 반환
 * @returns {string} 81자리 문자열
 */
function getRandomPuzzle() {
  return puzzles[Math.floor(Math.random() * puzzles.length)];
}

export { getRandomPuzzle };
