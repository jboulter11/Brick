var xAngle = 0, yAngle = 0;
console.log("Initilized");

if (!!window.EventSource) {
  var source = new EventSource('../stream');
} else {
  // Result to xhr polling :(
}

source.addEventListener('message', function(e) {
  var data = JSON.parse(e.data);
  console.log(data.id, data.msg);
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
