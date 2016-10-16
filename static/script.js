var xAngle = 0, yAngle = 0;
console.log("Initilized");

if (!!window.EventSource) {
  var source = new EventSource('/stream');
} else {
  // Result to xhr polling :(
}
var absX = 0;
var absY = 0;
var absZ = 0;
var rotX = 0;
var rotY = 0;
var rotZ = 0;
var xv = 0;
var zv = 0;

source.addEventListener('message', function(e) {
  console.log(e.data);
  var data = JSON.parse(e.data);
  console.log(data.id, data.msg);
  xv += data['Accel']['x'] * 3;
  zv += data['Accel']['y'] * 3;

  absX = xv
  absZ = zv

  rotY += data['Gyro']['z'];

  document.getElementById('house').style.transform = " translate3d(" + absX + "px, "+ absY + "px, " + absZ + "px)";
  document.getElementById('house').style.transform += "rotateX(" + rotX + "deg) rotateY("+rotY+"deg) rotateZ("+rotZ+"deg)";
}, false);

source.addEventListener('open', function(e) {
  // Connection was opened.
  console.log("Stream Opened");
}, false);

source.addEventListener('error', function(e) {
  if (e.readyState == EventSource.CLOSED) {
    // Connection was closed.
    console.log("Stream Closed");
  }
}, false);

document.addEventListener('keydown', function(e) {
  console.log("keydown", e.keyCode);
  switch(e.keyCode) {
    case 37: // left
      yAngle -= 5;
      break;

    case 38: // up
      xAngle += 5;
      break;

    case 39: // right
      yAngle += 5;
      break;

    case 40: // down
      xAngle -= 5;
      break;
  };
  console.log('house',$('house'),$('#house').css)
  console.log(document.getElementById('house').style)
  document.getElementById('house').style.transform = "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)";
}, false);
