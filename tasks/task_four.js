
// Write a JavaScript program to remove items from a drop-down list.
// Sample HTML file :

// <!DOCTYPE html>
// <html><head>
// <meta charset=utf-8 />
// <title>Remove items from a dropdown list</title>
// </head><body><form>
// <select id="colorSelect">
// <option>Red</option>
// <option>Green</option>
// <option>White</option>
// <option>Black</option>
// </select>
// <input type="button" onclick="removecolor()" value="Select and Remove">
// </form>
// </body>
// </html>





function removeColor() {
    // Get the select element by its ID
    const selectElement = document.getElementById("colorSelect");
  
    // Get the selected option
    const selectedOption = selectElement.options[selectElement.selectedIndex];
  
    // Check if an option is selected before removing
    if (selectedOption) {
      // Remove the selected option from the dropdown list
      selectElement.removeChild(selectedOption);
    }
  }