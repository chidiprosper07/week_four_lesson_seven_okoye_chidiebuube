//* Write a JavaScript function that accepts a row, column (to identify a particular cell) and a string to update the cell's contents.
//Sample HTML file :

//<!DOCTYPE html>
//<html><head><meta charset=utf-8 />
//<title>Change the content of a cell</title>
//</head><body>
/* <table id="myTable" border="1">
<tr><td>Row1 cell1</td>
<td>Row1 cell2</td></tr>
<tr><td>Row2 cell1</td>
<td>Row2 cell2</td></tr>
<tr><td>Row3 cell1</td>
<td>Row3 cell2</td></tr>
</table><form>
<input type="button" onclick="changeContent()" value="Change content">
</form></body></html> */ 

function changeContent () {
  const debeeCell = document.getElementsByTagName('td')[0]
  debeeCell.innerText = 'debee\'s cell'
  debeeCell.style.color = '#dcbc02'
  debeeCell.style.backgroundColor = '#000'

  const toochiCell = document.getElementsByTagName('td')[1]
  toochiCell.innerText = 'Toochi\'s cell'

  const echeCell = document.getElementsByTagName('td')[2]
  echeCell.innerText = 'Eche\'s cell'

  const tinaCell = document.getElementsByTagName('td')[3]
  tinaCell.innerText = 'Tina\'s cell'

  const igCell = document.getElementsByTagName('td')[4]
  igCell.innerText = 'IG\'s cell'

  const taiwoCell = document.getElementsByTagName('td')[5]
  taiwoCell.innerText = 'Taiwo\'s cell'
}

// I ignored lint for not reusing function