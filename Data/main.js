var sketchProc=function(processingInstance){ with (processingInstance){
// Stay dangereous.
	keys = [];
setup = function() {
	charx = 400;
	chary = 500;
	chartx = 400;
	charty = 300;
	chardir = "right";
	mouseIsPressed = false;
	
	charvertspeed = 0;
	jumping = false;
	
	grav = 3;
	
	bullets = [];
	chara = 0;
	chara2 = 0;
	moving = false;
	aiming = false;
	charshooting = false;
	characcuracy = 3;
	
	frame = 0;
	
	size(800,600);
	frameRate(60);
	angleMode = "degrees";
	
	charspeed = 4;
	movstyle = "WASD";	
	
	
	charwalk = [loadImage("Data/Images/chartd1.png"),loadImage("Data/Images/chartd2.png"),loadImage("Data/Images/chartd3.png"),loadImage("Data/Images/chartd4.png")];
	
	shoot = function(x,y,tx,ty,speed,mode) {
		//fill(255,255,245,230);
		bullets.push({x,y,tx,ty,speed});
		
	};
	drawbullets = function() {
		for (b = 0; b < bullets.length; b++) {
			fill(250,255,230);
			if (dist(bullets[b].x,bullets[b].y,bullets[b].tx,bullets[b].ty) > bullets[b].speed) {
				ellipse(bullets[b].x,bullets[b].y,5,5);
			}
			bullets[b].x -= bullets[b].speed*cos(atan2(bullets[b].y-bullets[b].ty,bullets[b].x-bullets[b].tx));
			bullets[b].y -= bullets[b].speed*sin(atan2(bullets[b].y-bullets[b].ty,bullets[b].x-bullets[b].tx));
			
			bullets[b].tx -= bullets[b].speed*cos(atan2(bullets[b].y-bullets[b].ty,bullets[b].x-bullets[b].tx));
			bullets[b].ty -= bullets[b].speed*sin(atan2(bullets[b].y-bullets[b].ty,bullets[b].x-bullets[b].tx));
			
			//For debug purposes and safety of the universe...
			if (bullets[b].x>width||bullets[b].x<0||bullets[b].y>height||bullets[b].y<0) {
			/*
			bullets[b].x = null;
			bullets[b].y = null;
			bullets[b].tx = null;
			bullets[b].ty = null;
			bullets[b].speed = null;
			*/
			bullets[b] = {};
			}
			
		}
	};
	
	aminate = function(imagen,x,y,s) {
		frame = (frame + s) % imagen.length;		
		image(imagen[floor(frame)],x,y);
	};
	
	char = function(x,y,speed,maxhealth,power,mode) {
		if (mode == "topdown") {
		
			pushMatrix();
			translate(x,y);
			
			if (aiming) {
				rotate(chara2+radians(270));
			} else {
				rotate(chara+radians(270));
			}
			if (moving) {
				aminate(charwalk,-50,-50,0.1);
			} else {
				image(charwalk[0],-50,-50);
			}
			popMatrix();
		
			if (aiming) {
				if (charshooting) {
					shoot(charx,chary,mouseX+random(-characcuracy,characcuracy),mouseY+random(-characcuracy,characcuracy),random(9,11));
				}
			}
		} else if (mode == "platform") {
		println("Yay!");
			pushMatrix();
			translate(x,y);
			
			//Add stuff here
			fill(255,0,0);
			rect(-5,-10,10,10);
			
			
			popMatrix();
		}
	};
	
	/*loadamination = function(name,number) {
		images = [];
		for (var q=0;q<number;q++) {
			filename = name + nf(q,4) + ".png";
			images[q] = loadImage(filename);
		}
		return images[];
	};*/
	
	charmoveplatorm = function() {
		moving = false;
		if (keyPressed) {
			if (movstyle == "WASD") {
				if (keys[65]) {
					charx-=charspeed;
					moving = true;
					chardir = "left";
				}
				if (keys[68]) {
					charx+=charspeed;
					moving = true;
					chardir = "right";
				}
				if (keys[87]) {
					if (jumping == false) {
						charvertspeed -= 10-grav; 
						chary -= charvertspeed;
						jumping = true;
					}
				}
			}			
		}
		chary += grav;
		if (chary > height) {
			chary -= grav;
			jumping = false;
			charvertspeed = 0;
		}		
	};
	
	charmovetopdown = function() {		
		moving = false;
		//aiming;
		chara = atan2(chary-charty,charx-chartx);
		chara2 = atan2(chary-mouseY,charx-mouseX);
		if (mouseIsPressed==true) {
			if (mouseButton == RIGHT) {
				aiming = true;
			}
			if (mouseButton == LEFT) {
				charshooting = true;
			}			
		} else {
			aiming = false;
			charshooting = false;
		}
		// WASD keys
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
		/*if (chartx > charx+(3*charspeed)) {
			chartx -= charspeed;
		}
		if (chartx < charx-(3*charspeed)) {
			chartx += charspeed;
		}
		if (charty > chary+(3*charspeed)) {
			charty -= charspeed;
		}
		if (charty < chary-(3*charspeed)) {
			charty += charspeed;
		}*/
		if (dist(charx,chary,chartx,charty) > charspeed*6) {
			chartx+=cos(chara)*(charspeed);
			charty+=sin(chara)*(charspeed);
		}
		
		if (moving == true) {		
			charx -= cos(chara)*charspeed;
			chary -= sin(chara)*charspeed;
		}
		/*fill(255);
		ellipse(chartx,charty,10,10);
		fill(255,0,0);
		ellipse(charx,chary,10,10);*/
	};
	/*level = function(mode) {
		background(100);	
		charmovetopdown();
		char(charx,chary,0,charspeed,100,10,mode);
		drawbullets();
	};
	
	//Levels!
	level1 = function() {
		level("topdown");
	};*/
};

draw = function() {
	background(100);	
	charmoveplatorm();
	char(charx,chary,charspeed,100,10,"platform");
	
	drawbullets();
};

keyPressed = function() {
	keys[keyCode] = true;
};
keyReleased = function() {
	keys[keyCode] = false;
};
mousePressed = function() {
	mouseIsPressed = true;
};
mouseReleased = function() {
	mouseIsPressed = false;
};
}};
