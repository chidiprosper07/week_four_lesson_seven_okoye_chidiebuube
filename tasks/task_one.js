/* Here is a sample html file with a submit button. Modify the style of the paragraph text through javascript code.
Sample HTML file:

<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>JS DOM paragraph style</title>
</head>
<body>
<p id ='text'>JavaScript Exercises - w3resource</p>
<div>
<button id="jsstyle"
onclick="js_style()">Style</button>
</div>
</body>
</html>
Make the font, font size, and colour of the paragraph text will be changed when you click the button. */

function js_style () {
  let text = document.getElementById('text');
  text.style.color = '#0000ff'
  text.style.fontSize = '50px'
  text.style.fontFamily = 'Gill Sans, sans-serif'
}
