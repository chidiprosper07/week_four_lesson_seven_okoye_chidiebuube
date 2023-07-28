
// Write a JavaScript function that accepts a row, column (to identify a particular cell) and a string to update the cell's contents.
// Sample HTML file :

// <!DOCTYPE html>
// <html><head><meta charset=utf-8 />
// <title>Change the content of a cell</title>
// </head><body>
// <table id="myTable" border="1">
// <tr><td>Row1 cell1</td>
// <td>Row1 cell2</td></tr>
// <tr><td>Row2 cell1</td>
// <td>Row2 cell2</td></tr>
// <tr><td>Row3 cell1</td>
// <td>Row3 cell2</td></tr>
// </table><form>
// <input type="button" onclick="changeContent()" value="Change content">
// </form></body></html>




function changeContent(){
    let solution = document.getElementsByTagName('td')[0] //targetted the first td tag using the index[0]
    solution.innerText = 'chidiebube';  //changed the html content to winners
    solution.style.color = 'white'; //changed the text color to white
    solution.style.backgroundColor = 'red' //changed the background color to red


}