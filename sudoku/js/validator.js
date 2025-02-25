function validateBoard() {
  document.querySelectorAll(".cell").forEach((cell) => {
    cell.classList.remove("invalid");
  });

  let duplicateCells = new Set();

  document.querySelectorAll(".cell").forEach((cell) => {
    if (cell.textContent) {
      const index = parseInt(cell.dataset.index);
      const row = Math.floor(index / 9);
      const col = index % 9;
      const value = cell.textContent;

      const duplicates = findDuplicates(row, col, value, index);
      duplicates.forEach((dupIndex) => duplicateCells.add(dupIndex));
    }
  });

  duplicateCells.forEach((index) => {
    document
      .querySelector(`.cell[data-index="${index}"]`)
      .classList.add("invalid");
  });
}

function findDuplicates(row, col, value, currentIndex) {
  let duplicates = [];

  document.querySelectorAll(".cell").forEach((cell, i) => {
    const r = Math.floor(i / 9);
    const c = i % 9;

    if (
      (r === row || c === col || isSameBox(row, col, r, c)) &&
      cell.textContent === value &&
      i !== currentIndex
    ) {
      duplicates.push(i);
    }
  });

  return duplicates;
}

function isSameBox(row1, col1, row2, col2) {
  return (
    Math.floor(row1 / 3) === Math.floor(row2 / 3) &&
    Math.floor(col1 / 3) === Math.floor(col2 / 3)
  );
}

function isPuzzleComplete() {
  const emptyCells = document.querySelectorAll(".cell:empty");
  if (emptyCells.length > 0) return false;

  let hasError = false;
  document.querySelectorAll(".cell").forEach((cell) => {
    if (cell.classList.contains("invalid")) {
      hasError = true;
    }
  });

  return !hasError;
}

export { validateBoard, isPuzzleComplete };
