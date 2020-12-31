// from data.js
let tableData = data;

// YOUR CODE HERE!
let tbody = d3.select("tbody");

tableData.forEach(function (sighting) {
  let row = tbody.append("tr");
  Object.entries(sighting).forEach(function ([key, value]) {
    var cell = row.append("td");
    cell.text(value);
  });
});

let button = d3.select("#filter-btn");
let form = d3.select("#form");

button.on("click", runFilter);
form.on("submit", runFilter);

function runFilter() {
  d3.event.preventDefault();
  let inputField = d3.select("#datetime");
  let inputValue = inputField.property("value");
  tbody.html("");

  if (inputValue !== "") {
    console.log(inputValue);

    let filteredData = tableData.filter(sight => sight.datetime === inputValue);
    console.log(filteredData);

    filteredData.forEach(function (filteredArray) {
      let row = tbody.append("tr");
      Object.entries(filteredArray).forEach(function ([key, value]) {
        var cell = row.append("td");
        cell.text(value);
      });
    });
  }
  else {
    console.log(tableData);
    tableData.forEach(function (sighting) {
      let row = tbody.append("tr");
      Object.entries(sighting).forEach(function ([key, value]) {
        var cell = row.append("td");
        cell.text(value);
      });
    });
  };
};
