// declare variables for each of the
// html elements we will be using
var sizer = document.getElementById('sizePicker');
var height = document.getElementById('inputHeight');
var width = document.getElementById('inputWidth');
var colour = document.getElementById('colorPicker'); //English spelling! ;-)
var grid = document.getElementById('pixelCanvas');

// Select color input
userColour = colour.value;

// Select size input
makeGrid(5,5); //default grid

// When size is submitted by the user, call makeGrid()
sizer.addEventListener('submit', function(event) {
  event.preventDefault();
  var rows = height.value;
  var cols = width.value;
  makeGrid(rows,cols);
});

function makeGrid(rows, cols) {
  // Clear the default grid
  grid.innerHTML = ""
  // Outer loop on the rows (y-dimension)
  for (var y = 0; y < rows; y++) {
    var row = grid.insertRow(y)
    // Inner loop to add the cells in each row (x-dimension)
    for (var x = 0; x < cols; x++) {
      row.insertCell(x);
    }
  }
}

// Listen for the user to click on a cell
grid.addEventListener('click', function(event) {
  if (event.target.nodeName === 'TD') {
    event.target.style.backgroundColor = userColour
  }
});
