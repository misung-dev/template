import { selectedCell } from "./board.js";
import { validateBoard } from "./validator.js";

function insertNumber(num) {
  if (!selectedCell || selectedCell.classList.contains("fixed")) return;
  selectedCell.textContent = num;
  validateBoard();
}

function deleteCell() {
  if (!selectedCell || selectedCell.classList.contains("fixed")) return;
  selectedCell.textContent = "";
}

export { insertNumber, deleteCell };
