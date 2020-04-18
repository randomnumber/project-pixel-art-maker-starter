// declare variables for each of the
// html elements we will be using
const sizer = document.getElementById('sizePicker');
const height = document.getElementById('inputHeight');
const width = document.getElementById('inputWidth');
const color = document.getElementById('colorPicker');
const grid = document.getElementById('pixelCanvas');

// Select colour input
var userColor = color.value;

// Create a default grid
makeGrid(5,5);

// When size is submitted by the user, call makeGrid()
sizer.addEventListener('submit', function(event) {
  event.preventDefault();
  var rows = height.value;
  var cols = width.value;
  makeGrid(rows,cols);
});

function makeGrid(rows, cols) {
  // Clear the default grid
  grid.innerHTML = "";
  // Outer loop on the rows (y-dimension)
  for (var y = 0; y < rows; y++) {
    var row = grid.insertRow(y)
    // Inner loop to add the cells in each row (x-dimension)
    for (var x = 0; x < cols; x++) {
      row.insertCell(x);
    }
  }
}

// Listen for the user to click on a cell and use the current colour
grid.addEventListener('click', function(event) {
  if (event.target.nodeName === 'TD') {
    event.target.style.backgroundColor = color.value;
  }
});
