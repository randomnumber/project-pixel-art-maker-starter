// declare variables for each of the
// html elements we will be using
var sizer = document.getElementById('sizePicker');
var rows = document.getElementById('inputHeight');
var cols = document.getElementById('inputWidth');
var colour = document.getElementById('colorPicker'); //English spelling! ;-)
var grid = document.getElementById('pixelCanvas');

// Select color input
// Select size input
makeGrid(20,20); //default grid


// When size is submitted by the user, call makeGrid()
sizer.addListenerEvent('submit', function(event) {
  event.preventDefault();
  makeGrid(rows,cols);
})


function makeGrid(rows, cols) {
  // outer loop on the rows (y-dimension)
  for (var y = 0; y < rows.value; y++) {
    var row = grid.insertRow(y)
    // inner loop to add the cells in each row (x-dimension)
    for (var x = 0; x < cols.value; x++) {
      row.insertCell(x);
    }
  }
}
