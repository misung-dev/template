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
      cell.addEventListener("click", () => {
        console.log("📌 셀 클릭됨:", i);
        selectCell(cell);
      });
    }

    board.appendChild(cell);
  }
}

function selectCell(cell) {
  if (selectedCell) {
    selectedCell.classList.remove("selected");
  }
  selectedCell = cell;
  selectedCell.classList.add("selected");

  console.log("✅ selectCell() 실행됨! 선택된 셀:", selectedCell.dataset.index);
}

function getSelectedCell() {
  console.log(
    "🔍 getSelectedCell() 실행됨! 현재 selectedCell 값:",
    selectedCell
  );
  return selectedCell;
}

export { createBoard, selectCell, getSelectedCell };
