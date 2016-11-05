var sketchProc=function(processingInstance){ with (processingInstance){
// Stay dangereous.
	keys = [];
setup = function() {
	charx = 400;
	chary = 300;
	chartx = 400;
	charty = 300;
	
	chara = 0;
	moving = false;
	frame = 0;
	size(800,600);
	frameRate(60);
	angleMode = "degrees";
	
	charspeed = 3;
	movstyle = "WASD";
	
	
	charwalk = [loadImage("Data/Images/chartd1.png"),loadImage("Data/Images/chartd2.png"),loadImage("Data/Images/chartd3.png"),loadImage("Data/Images/chartd4.png")];
	
	/*loadStrip = function(name,number) {
		oot = [];
		for (i = 0; i < number; i++) {
			oot[i]=(loadImage("Data/Images/"+name+i+".png"));
		}
		return oot[];
	};*/
	
	//charwalk = loadStrip(chartd,3);
	
	aminate = function(imagen,x,y,s) {
		frame = (frame + s) % imagen.length;		
		image(imagen[floor(frame)],x,y);
	};
	char = function(x,y,speed,maxhealth,power) {
		//chara = atan2(y-mouseY,x-mouseX);
		pushMatrix();
		translate(x,y);
		rotate(chara+radians(270));
			if (moving == true) {
				aminate(charwalk,-50,-50,0.1);
			} else {
				image(charwalk[0],-50,-50);
			}
		popMatrix();
	};
	shoot = function(x,y,tx,ty,speed,mode) {
		fill(255,255,245,230);
		bullets.push({x,y,tx,ty});
		
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
	
	charmoveturny = function() {
		// WASD keys
		moving = false;
		if (keyPressed) {
			if (movstyle == "WASD") {
				if (keys[65]) {
				    chartx-=charspeed;
					moving = true;
				}
				if (keys[68]) {
				    chartx+=charspeed;
					moving = true;
				}
				if (keys[87]) {
				    charty-=charspeed;
					moving = true;
				}
				if (keys[83]) {
				    charty+=charspeed;
					moving = true;
				}
			}
		}
		if (movstyle == "arrows") {
			// Arrow keys
			if (keys[37]) {
			    chartx-=charspeed;
				moving = true;
			}
			if (keys[39]) {
			    chartx+=charspeed;
				moving = true;
			}
			if (keys[38]) {
			    charty-=charspeed;
			    moving = true;
			}
			if (keys[40]) {
			    charty+=charspeed;
			    moving = true;
			}
		}
		if (moving == false) {
			if (chartx > charx-cos(chara)*charspeed) {
				chartx -= charspeed;
			}
			if (chartx < charx+cos(chara)*charspeed) {
				chartx += charspeed;
			}
			if (charty > chary-sin(chara)*charspeed) {
				charty -= charspeed;
			}
			if (charty < chary+sin(chara)*charspeed) {
				charty += charspeed;
			}
		}
		if (chartx > charx+(2*charspeed)) {
			chartx -= charspeed;
		} if (chartx < charx-(2*charspeed)) {
			chartx += charspeed;
		}
		if (charty > chary+(2*charspeed)) {
			charty -= charspeed;
		}
		if (charty < chary-(2*charspeed)) {
			charty += charspeed;
		}
		chara = atan2(chary-charty,charx-chartx);
		if (moving == true) {		
			charx -= cos(chara)*charspeed;
			chary -= sin(chara)*charspeed;
		}
		//fill(255);
		//ellipse(chartx,charty,10,10);
	};
};

draw = function() {
	background(250);	
	charmoveturny();
	char(charx,chary,0,charspeed,100,10);
	
};

keyPressed = function() {
	keys[keyCode] = true;
	println(keyCode);
};
keyReleased = function() {
	keys[keyCode] = false;
};
}};
