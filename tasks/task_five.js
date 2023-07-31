
// An HTML table is built with the following tag structure:

// <table>
// <tr>
// <th>name</th>
// <th>height</th>
// <th>place</th>
// </tr>
// <tr>
// <td>Kilimanjaro</td>
// <td>5895</td>
// <td>Tanzania</td>
// </tr>
// </table>

// For each row, the <table> tag contains a <tr> tag. Inside these <tr> tags, we can put cell elements: either heading cells (<th>) or regular cells (<td>). Given a data set of mountains, an array of objects with name, height, and place properties, generates the DOM structure for a table that enumerates the objects. It should have one column per key, one row per object, plus a header row with <th> elements at the top, listing the column names.
// Write this so that columns are automatically derived from the objects, by taking the property names of the first object in data.
// Add the resulting table to the element with an id attribute of “mountains” so that it becomes visible in the document. Once you have this working, right-align cells that contain number values by setting their style.textAlign property to “right”




const mountainsData = [
    { name: "Kilimanjaro", height: 5895, place: "Tanzania" },
    { name: "Everest", height: 8848, place: "Nepal" },
    { name: "Denali", height: 6168, place: "USA" },
  ];
  
  function createTable(data) {
    const container = document.getElementById("mountains");
    const table = document.createElement("table");
  
    // Create header row
    const headerRow = document.createElement("tr");
    Object.keys(data[0]).forEach((key) => {
      const th = document.createElement("th");
      th.textContent = key;
      headerRow.appendChild(th);
    });
    table.appendChild(headerRow);
  
    // Create rows for each mountain and populate the cells
    data.forEach((mountain) => {
      const row = document.createElement("tr");
      Object.values(mountain).forEach((value) => {
        const cell = document.createElement("td");
        cell.textContent = value;
        if (typeof value === "number") {
          cell.style.textAlign = "right"; // Right-align number cells
        }
        row.appendChild(cell);
      });
      table.appendChild(row);
    });
  
    container.appendChild(table);
  }
  
  createTable(mountainsData);
  