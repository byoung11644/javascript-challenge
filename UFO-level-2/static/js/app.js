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
  let filteredData = [];
  for (var i = 0; i < tableData.length; i++) {
    if (
      (document.getElementById("datetime").value == '' || tableData[i].datetime == document.getElementById("datetime").value) &&
      (document.getElementById("city").value == '' || tableData[i].city == document.getElementById("city").value) &&
      (document.getElementById("state").value == '' || tableData[i].state == document.getElementById("state").value) &&
      (document.getElementById("country").value == '' || tableData[i].country == document.getElementById("country").value) &&
      (document.getElementById("shape").value == '' || tableData[i].shape == document.getElementById("shape").value)
    ) {

      console.log(tableData[i]);
      filteredData.push(tableData[i]);
    }
  };



  tbody.html("");

  if (filteredData != "") {

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
