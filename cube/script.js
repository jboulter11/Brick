var xAngle = 0, yAngle = 0;
console.log("Initilized");

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
