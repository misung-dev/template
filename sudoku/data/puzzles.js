const puzzles = [
  "534678012672195348198342567859761403426853791713924056961537284287419035345286179",
  "732060059468035210095172068600901802081020005520486371859317024346258197217649580",
];

/**
 * Medium 난이도 퍼즐을 랜덤 반환
 * @returns {string} 81자리 문자열
 */
function getRandomPuzzle() {
  return puzzles[Math.floor(Math.random() * puzzles.length)];
}

export { getRandomPuzzle };
