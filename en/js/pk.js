window.onload = function () {
  for(var i = 1; i <=16; i++) {
    var pos = "pos" + ((i < 10)? "0" + i : i);
    var img = document.getElementById(pos);
    img.src = decideImg(pos, img.src);
  }
}

function decideImg(position, image) {
  var winTeam = localStorage[position];
  if(!winTeam) {
    return image;
  } else {
    return (winTeam == "red") ? "images/12.png" : "images/11.png";
  }
}