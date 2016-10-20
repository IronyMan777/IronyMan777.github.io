var sketchProc=function(processingInstance){ with (processingInstance){
// Stay dangereous.

/*var char = {
  img1:loadImage("Character concept 2.png"),
  x:0,
  y:0,
  health:100,
  inventory:{}
};*/

setup = function() {
  img1=loadImage("Character concept 2.png");
  size(800,600);
};

draw = function() {
  background(55);
  image(img1,mouseX,mouseY);
};
}};
