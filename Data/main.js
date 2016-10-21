var sketchProc=function(processingInstance){ with (processingInstance){
/*@pjs preload="Character concept 2.png","Ship1.png";*/
// Stay dangereous.
	keys = [];
setup = function() {
	charx = 400;
	chary = 300;
	chara = 0;
	
	img1=loadImage("Data/Images/char2.png");
	size(800,600);
	frameRate(60);
	angleMode = "degrees";
	
	charspeed = 2;
	movstyle = "WASD";
	
	charmovetopdown = function() {
	    // WASD keys
	    if (movstyle == "WASD") {
		if (keys[65]) {
		    charx-=charspeed;
		}
		if (keys[68]) {
		    charx+=charspeed;
		}
		if (keys[87]) {
		    chary-=charspeed;
		}
		if (keys[83]) {
		    chary+=charspeed;
		}
	    }
	    if (movstyle == "arrows") {
		// Arrow keys
		if (keys[37]) {
		    charx-=charspeed;
		}
		if (keys[39]) {
		    charx+=charspeed;
		}
		if (keys[38]) {
		    chary-=charspeed
		}
		if (keys[40]) {
		    chary+=charspeed
		}
	    }
	};
};

draw = function() {
	background(240);
	if (mousePressed && mouseButton == RIGHT) {
		chara = atan2(chary-mouseY,charx-mouseX);
	}
	pushMatrix();
		translate(charx,chary);
		rotate(chara+225);
	image(img1,-50,-50);
	popMatrix();
	charmovetopdown();
};
keyPressed = function() {
	keys[keyCode] = true;
	println(keyCode);
};
keyReleased = function() {
	keys[keyCode] = false;
};
}};
