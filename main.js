// Stay dangereous.

var char = {
  img1:loadImage("");
  x:0,
  y:0,
  health:100,
  inventory:{}
};

var knife = {

};


setup = function() {

};

draw = function() {
   img(char.img1,mouseX,mouseY);
};
