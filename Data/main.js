var sketchProc=function(processingInstance){ with (processingInstance){
// Stay dangereous.
	keys = [];
setup = function() {
	charx = 400;
	chary = 300;
	chara = 0;
	moving = false;
	frame = 0;
	
	charwalk = [loadImage("Data/Images/charwalk0000.png"),loadImage("Data/Images/charwalk0001.png"),loadImage("Data/Images/charwalk0002.png")];
	
	aminate = function(imagen,x,y,btn,s) {
		if (keys[btn] == true) {
			frame = (frame + s) % imagen.length;
		}
		image(imagen[frame],x,y);
	}
	char = function(x,y,speed,maxhealth,power) {
		chara = atan2(y-mouseY,x-mouseX);
		pushMatrix();
		translate(x,y);
		rotate(chara);
			//aminate(charwalk,0,0,65,1);
		image(charwalk[0],0,0);
		popMatrix();
	};
	/*loadamination = function(name,number) {
		images = [];
		for (var q=0;q<number;q++) {
			filename = name + nf(q,4) + ".png";
			images[q] = loadImage(filename);
		}
		return images[];
	};
	charwalktest = loadamination("Data/Images/charwalk",2);
	frame = 0;
	displayamination = function(name,number,x,y) {
		images = [];
		for (var q=0;q<number;q++) {
			images[q] = name[q];
		}
		frame = (frame+1)%number;
		image(images[frame],x,y);
	};*/
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
	background(250);
	

	

		char(charx,chary,0,charspeed,100,10);

	charmovetopdown();
	aminate(charwalk,100,100,38,1);
};

keyPressed = function() {
	keys[keyCode] = true;
	println(keyCode);
};
keyReleased = function() {
	keys[keyCode] = false;
};
}};
