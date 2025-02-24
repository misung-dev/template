import { getRandomPuzzle } from "../data/puzzles.js";
import { createBoard } from "./board.js";
import { undoMove, deleteCell, insertNumber } from "./input.js";

document.addEventListener("DOMContentLoaded", () => {
  resetBoard();
  attachEventListeners();
});

function attachEventListeners() {
  document.getElementById("new-game").addEventListener("click", resetBoard);
  document.getElementById("undo").addEventListener("click", undoMove);
  document.getElementById("delete").addEventListener("click", deleteCell);

  document.querySelectorAll(".num-btn").forEach((button) => {
    button.addEventListener("click", (e) => {
      console.log("🔢 숫자 버튼 클릭됨:", e.target.dataset.num);
      insertNumber(e.target.dataset.num);
    });
  });
}

function resetBoard() {
  const puzzle = getRandomPuzzle();
  createBoard(puzzle);
}
