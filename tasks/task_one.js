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
  let changeStyle = document.getElementById('text').style.color = '#dcbc02'
  changeStyle += document.getElementById('text').style.fontSize = '24px'
  changeStyle += document.getElementById('text').style.fontFamily = 'Gill Sans, sans-serif'
}
