var div = document.getElementById("selection"),
  x1 = 0,
  y1 = 0,
  x2 = 0,
  y2 = 0;

function reCalc() {
  var x3 = Math.min(x1, x2);
  var x4 = Math.max(x1, x2);
  var y3 = Math.min(y1, y2);
  var y4 = Math.max(y1, y2);
  div.style.left = x3 + "px";
  div.style.top = y3 + "px";
  div.style.width = x4 - x3 + "px";
  div.style.height = y4 - y3 + "px";
}

console.log(document.querySelector(".selection-section").offsetTop);
console.log(document.querySelector(".selection-section").offsetHeight);
var doNothing = false;

onmousedown = function (e) {
  doNothing = false;
  div.hidden = 0;
  x1 = e.clientX;
  y1 = e.clientY;
  reCalc();
};

onmousemove = function (e) {
  if (!doNothing) {
    x2 = e.clientX;
    y2 = e.clientY;
    reCalc();
  } else {
    x2 = e.clientX;
    y2 = e.clientY;
  }
};
onmouseup = function (e) {
  // div.hidden = 1;
  doNothing = true;
};
