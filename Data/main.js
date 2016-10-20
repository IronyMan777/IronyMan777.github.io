var sketchProc=function(processingInstance){ with (processingInstance){
/*@pjs preload="Character concept 2.png","Ship1.png";*/
// Stay dangereous.
  
var charpos = {
	x:0,
	y:0
};
keys = [];
keyPressed = function() {
	keys[keyCode] = true;
};
keyReleased = function() {
	keys[keyCode] = false;
};


setup = function() {
	img1=loadImage("images/char1.jpg");
	size(800,600);
	frameRate(60);
	angleMode = "degrees";
};

draw = function() {
	background(255);
	var a = atan2(charpos.y-mouseY,charpos.x-mouseX);
	pushMatrix();
		translate(charpos.x,charpos.y);
		rotate(a+90);
	image(img1,0,0);
	popMatrix();
};
}};
