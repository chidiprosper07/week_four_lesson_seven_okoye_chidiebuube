
// Write a JavaScript function to get the values of First and Last names of the following form.
// Sample HTML file :

// <!DOCTYPE html>
// <html><head>
// <meta charset=utf-8 />
// <title>Return first and last name from a form - w3resource</title>
// </head><body>
// <form id="form1" onsubmit="getFormvalue()">
// First name: <input type="text" name="fname" value="David"><br>
// Last name: <input type="text" name="lname" value="Beckham"><br>
// <input type="submit" value="Submit">
// </form>
// </body>
// </html>



function getFormvalue() {
  const form = document.getElementById("form1");

  // Get the input elements for first name and last name
  const firstNameInput = form.elements["fname"];
  const lastNameInput = form.elements["lname"];

  // Get the values of the first name and last name inputs
  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;

  // Log the values to the console (you can do whatever you want with the values)
  console.log("First Name:", firstName);
  console.log("Last Name:", lastName);

  // Prevent the form from submitting (optional, as this function doesn't actually handle form submission)
  return false;
}