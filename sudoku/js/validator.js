function validateBoard() {
  document
    .querySelectorAll(".cell")
    .forEach((cell) => cell.classList.remove("invalid"));

  document.querySelectorAll(".cell").forEach((cell) => {
    if (cell.textContent) {
      const index = parseInt(cell.dataset.index);
      const row = Math.floor(index / 9);
      const col = index % 9;

      if (isDuplicate(row, col, cell.textContent)) {
        cell.classList.add("invalid");
      }
    }
  });
}

function isDuplicate(row, col, value) {
  return [...document.querySelectorAll(".cell")].some((cell, i) => {
    const r = Math.floor(i / 9);
    const cIdx = i % 9;
    return (
      (r === row || cIdx === col || isSameBox(row, col, r, cIdx)) &&
      cell.textContent === value &&
      i !== row * 9 + col
    );
  });
}

function isSameBox(row1, col1, row2, col2) {
  return (
    Math.floor(row1 / 3) === Math.floor(row2 / 3) &&
    Math.floor(col1 / 3) === Math.floor(col2 / 3)
  );
}

export { validateBoard };
