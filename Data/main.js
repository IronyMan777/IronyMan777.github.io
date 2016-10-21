var sketchProc=function(processingInstance){ with (processingInstance){
// Stay dangereous.
	keys = [];
setup = function() {
	charx = 400;
	chary = 300;
	chara = 0;
	moving = false;
	
	charwalk = [loadImage("Data/Images/charwalk0"),loadImage("Data/Images/charwalk1"),loadImage("Data/Images/charwalk2")];
	
	aminate = function(imagen,x,y,s) {
		for (var q=0;q<imagen.length;q++) {
			image(imagen[q],x,y);
		}
	};
	
	img1=loadImage("Data/Images/char2.png");
	walking = loadImage("Data/Images/char3.gif");
	size(800,600);
	frameRate(60);
	angleMode = "degrees";
	
	charspeed = 2;
	movstyle = "WASD";
	
	charmovetopdown = function() {
	    	// WASD keys
		moving = false;
		if (movstyle == "WASD") {
			if (keys[65]) {
			    charx-=charspeed;
				moving = true;
			}
			if (keys[68]) {
			    charx+=charspeed;
				moving = true;
			}
			if (keys[87]) {
			    chary-=charspeed;
				moving = true;
			}
			if (keys[83]) {
			    chary+=charspeed;
				moving = true;
			}
		}
		if (movstyle == "arrows") {
			// Arrow keys
			if (keys[37]) {
			    charx-=charspeed;
				moving = true;
			}
			if (keys[39]) {
			    charx+=charspeed;
				moving = true;
			}
			if (keys[38]) {
			    chary-=charspeed;
			    moving = true;
			}
			if (keys[40]) {
			    chary+=charspeed;
			    moving = true;
			}
		}
	};
};

draw = function() {
	background(240);
	if (mousePressed && (mouseButton == RIGHT)) {
		chara = atan2(chary-mouseY,charx-mouseX);
	}
	pushMatrix();
		translate(charx,chary);
		rotate(chara+225);
	if (moving == false) {
		image(img1,-50,-50);
	} else {
		image(walking,-50,-50);
	}
	popMatrix();
	charmovetopdown();
	image(walking,100,100);
};
keyPressed = function() {
	keys[keyCode] = true;
	//println(keyCode);
};
keyReleased = function() {
	keys[keyCode] = false;
};
}};
