var sketchProc=function(processingInstance){ with (processingInstance){
/*@pjs preload="Character concept 2.png","Ship1.png";*/
// Stay dangereous.
	keys = [];
setup = function() {
	charx = 400;
	chary = 300;
	
	img1=loadImage("Data/Images/char2.png");
	size(800,600);
	frameRate(60);
	angleMode = "degrees";
};

draw = function() {
	background(240);
	var a = atan2(chary-mouseY,charx-mouseX);
	pushMatrix();
		translate(charx,chary);
		rotate(a+225);
	image(img1,-50,-50);
	popMatrix();
};
keyPressed = function() {
	keys[keyCode] = true;
	println(keyCode);
};
keyReleased = function() {
	keys[keyCode] = false;
};
}};
