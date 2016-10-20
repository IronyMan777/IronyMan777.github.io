var sketchProc=function(processingInstance){ with (processingInstance){
/*@pjs preload="Character concept 2.png","Ship1.png";*/
// Stay dangereous.
setup = function() {
	charx = 400;
	chary = 300;

	var keys = [];
	keyPressed = function() {
		keys[keyCode] = true;
	};
	keyReleased = function() {
		keys[keyCode] = false;
	};
	
	img1=loadImage("Data/Images/char1.jpg");
	size(800,600);
	frameRate(60);
	angleMode = "degrees";
};

draw = function() {
	background(240);
	var a = atan2(chary-mouseY,charx-mouseX);
	pushMatrix();
		translate(charx,chary);
		rotate(a+90);
	image(img1,0,0);
	popMatrix();
};
}};
