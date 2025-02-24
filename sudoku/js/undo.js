import { getSelectedCell } from "./board.js";
import { validateBoard } from "./validator.js";

let moveHistory = [];

function insertNumber(num) {
  const selectedCell = getSelectedCell();
  if (!selectedCell || selectedCell.classList.contains("fixed")) return;

  moveHistory.push({
    cellIndex: selectedCell.dataset.index,
    prevValue: selectedCell.textContent,
  });

  selectedCell.textContent = num;
  validateBoard();
}

function undoMove() {
  if (moveHistory.length === 0) return;

  const lastMove = moveHistory.pop();
  const boardCells = document.querySelectorAll(".cell");
  const targetCell = boardCells[lastMove.cellIndex];

  if (targetCell) {
    targetCell.textContent = lastMove.prevValue;
  }

  validateBoard();
}

export { insertNumber, undoMove };
