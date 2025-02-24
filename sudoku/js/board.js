let selectedCell = null;

function createBoard(puzzle) {
  const board = document.getElementById("sudoku-board");

  if (!board) {
    console.error("❌ sudoku-board 요소를 찾을 수 없음");
    return;
  }

  board.innerHTML = "";

  for (let i = 0; i < 81; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.dataset.index = i;

    if (puzzle[i] !== "0") {
      cell.textContent = puzzle[i];
      cell.classList.add("fixed");
    } else {
      cell.addEventListener("click", () => selectCell(cell));
    }

    board.appendChild(cell);
  }

  console.log("✅ 그리드가 생성됨:", board.childNodes.length);
}

function selectCell(cell) {
  if (selectedCell) {
    selectedCell.classList.remove("selected");
  }
  selectedCell = cell;
  selectedCell.classList.add("selected");

  highlightRelatedCells(selectedCell);
}

function highlightRelatedCells(cell) {
  const index = parseInt(cell.dataset.index);
  const row = Math.floor(index / 9);
  const col = index % 9;

  document.querySelectorAll(".cell").forEach((c, i) => {
    c.classList.remove("highlight");
    const r = Math.floor(i / 9);
    const cl = i % 9;
    if (r === row || cl === col) {
      c.classList.add("highlight");
    }
  });
}

function getSelectedCell() {
  return selectedCell;
}

export { createBoard, selectCell, selectedCell, getSelectedCell };
