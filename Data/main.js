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
	
	charspeed = 2;
	movstyle = "WASD";
	
	var charl = function() {
	    charx -= charspeed;
	};
	var charr = function() {
	    charx += charspeed;
	};
	var charu = function() {
	    chary -= charspeed;
	};
	var chard = function() {
	    chary += charspeed;
	};
	var charmovetopdown = function() {
	    // WASD keys
	    if (movstyle === "WASD") {
		if (keys[65]) {
		    charl();
		}
		if (keys[68]) {
		    charr();
		}
		if (keys[87]) {
		    charu();
		}
		if (keys[83]) {
		    chard();
		}
	    }
	    if (movstyle === "arrows") {
		// Arrow keys
		if (keys[37]) {
		    charl();
		}
		if (keys[39]) {
		    charr();
		}
		if (keys[38]) {
		    charu();
		}
		if (keys[40]) {
		    chard();
		}
	    }
	};
	};

draw = function() {
	background(240);
	var a = atan2(chary-mouseY,charx-mouseX);
	pushMatrix();
		translate(charx,chary);
		rotate(a+225);
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
