// from data.js
var tableData = data;

// YOUR CODE HERE!
let tbody = d3.select("tbody");

tableData.forEach(function(sighting) {
  let row = tbody.append("tr");
  Object.entries(sighting).forEach(function([key, value]) {
      console.log(key, value);
      var cell = row.append("td");
      cell.text(value);
  });
});

let button = d3.select("#filter-btn");
let inputField = d3.select("#datetime").value;

button.on("click", function() {
    console.log(inputField);
});
