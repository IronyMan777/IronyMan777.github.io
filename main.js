var sketchProc=function(processingInstance){ with (processingInstance){
/*@pjs preload="Character concept 2.png";*/
// Stay dangereous.

setup = function() {
  img1=loadImage("Ship1.png");
  size(800,600);
  frameRate(60);
};

draw = function() {
  background(20);
  angle = atan2(pmouseY,mouseY,pmouseX,mouseX);
  pushMatrix();
    translate(mouseX,mouseY);
    rotate(angle);
    image(img1,0,0);
  popMatrix();
};
}};
