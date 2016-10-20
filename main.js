// Stay dangereous.

var char = {
  img1:loadImage("Character concept 2.png"),
  x:0,
  y:0,
  health:100,
  inventory:{}
};

setup = function() {
  size(800,600);
};

draw = function() {
   img(char.img1,mouseX,mouseY);
};
