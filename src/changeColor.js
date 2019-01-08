export function changeColor(color) {
  // $(".colorbox").style.color = "red";
  var currentColor = document.getElementsByClassName('colorbox');
  currentColor[0].style.backgroundColor = `${color}`;
}
