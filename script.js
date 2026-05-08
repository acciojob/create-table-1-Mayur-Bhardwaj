function insert_Row() {
    //Write your code here

  const table = document.getElementById("sampleTable");

  // Insert new row at the top
  const newRow = table.insertRow(0);

  // Insert cells
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);

  // Add text
  cell1.innerHTML = "New Cell1";
  cell2.innerHTML = "New Cell2";

  
}
