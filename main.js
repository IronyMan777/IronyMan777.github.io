var sketchProc=function(processingInstance){ with (processingInstance){
/*@pjs preload="Character concept 2.png","Ship1.png";*/
// Stay dangereous.

setup = function() {
  img1=loadImage("Ship1.png");
  size(800,600);
  frameRate(60);
  angle = 0;
};

draw = function() {
  background(20);
  a = atan2(mouseY,pmouseY,mouseX,pmouseX);
  angle += a;
  pushMatrix();
    translate(mouseX,mouseY);
    rotate(a);
    image(img1,0,0);
  popMatrix();
};
}};
