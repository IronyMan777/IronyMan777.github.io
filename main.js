var sketchProc=function(processingInstance){ with (processingInstance){
/*@pjs preload="Character concept 2.png","Ship1.png";*/
// Stay dangereous.

setup = function() {
  img1=loadImage("Ship1.png");
  size(800,600);
  frameRate(60);
  angleMode = "degrees";
};

draw = function() {
  background(255);
  var a = atan2(mouseY-pmouseY,mouseX-pmouseX);
  pushMatrix();
    translate(mouseX,mouseY);
    rotate(a);
    image(img1,0,0);
  popMatrix();
};
}};
