import { getRandomPuzzle } from "../data/puzzles.js";
import { createBoard } from "./board.js";
import { undoMove } from "./undo.js";
import { deleteCell } from "./input.js";
import { insertNumber } from "./input.js";

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
      insertNumber(e.target.dataset.num);
    });
  });
}

function resetBoard() {
  const puzzle = getRandomPuzzle();
  createBoard(puzzle);
}
