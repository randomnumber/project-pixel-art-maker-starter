// declare variables for each of the htrml elements we will be using
let sizer = document.getElementById('sizePicker');
let rows = document.getElementById('inputHeight');
let cols = document.getElementById('inputWidth');
let colour = document.getElementById('colorPicker'); //English spelling! ;-)
let grid = document.getElementById('pixelCanvas');

// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
sizer.addListenerEvent('submit', function(event) {
  event.preventDefault();
  makeGrid(rows,cols);
})


function makeGrid(rows, cols) {
  // outer loop on the rows (y-dimension)
  for (let y = 0, y < rows.value, y++) {
    let row = grid.insertRow(y);
    // inner loop to add the cells in each row (x-dimension)
    for (let x = 0, x < cols.value, x++) {
      let cell = row.insertCell(x);
    }
  }
}
