var sketchProc=function(processingInstance){ with (processingInstance){
// Stay dangereous.
	keys = [];
setup = function() {
	
	mouseIsPressed = false;
	
	lefthand = null;
	righthand = null;
	
	
	
	grav = 3;
	
	bullets = [];
	char = {
		x: 400,
		y: 500,
		tx: 400,
		ty: 300,
		speed: 4,
		dir: "right",
		a: 0,
		a2: 0,
		moving: false,
		aiming: false,
		shootingright: false,
		shootingleft: false,
		accuracy: 3,
		
		vertspeed: 0,
		jumping: false
	};
	
	frame = 0;
	
	size(800,600);
	frameRate(60);
	angleMode = "degrees";
	
	
	movstyle = "WASD";
	
	// Objects!
	item = function(type,hands,power,image) {
		if (type == "gun") {
		
		}
		
		if (type == "melee") {
		
		}
	};
	
	pistol = function(x,y) {
		item();
		
	};
	
	loadamination = function(name,number) {
		pictures = [];
		for (var q=0;q<number;q++) {
			pictures[q-1] = loadImage("Data/Images/"+name+q+".png");
		}
		return pictures;
	};
	
	charwalk = loadamination("chartd",5);
	
	shoot = function(x,y,tx,ty,speed,mode) {
		//fill(255,255,245,230);
		bullets.push({x,y,angle:atan2(y-ty,x-tx),speed});
		
	};
	drawbullets = function() {
		for (b = 0; b < bullets.length; b++) {
			fill(250,255,230);
			/*if (dist(bullets[b].x,bullets[b].y,bullets[b].tx,bullets[b].ty) > bullets[b].speed) {*/
				ellipse(bullets[b].x,bullets[b].y,5,5);
			//}
			bullets[b].x -= bullets[b].speed*cos(bullets[b].angle);
			bullets[b].y -= bullets[b].speed*sin(bullets[b].angle);
			
			bullets[b].tx -= bullets[b].speed*cos(bullets[b].angle);
			bullets[b].ty -= bullets[b].speed*sin(bullets[b].angle);
			
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
	
	displaychar = function(x,y,speed,maxhealth,power,mode) {
		if (mode == "topdown") {
		
			pushMatrix();
			translate(x,y);
			
			if (char.aiming) {
				rotate(char.a2+radians(270));
			} else {
				rotate(char.a+radians(270));
			}
			if (char.moving) {
				aminate(charwalk,-50,-50,0.1);
			} else {
				image(charwalk[0],-50,-50);
			}
			popMatrix();
		
			if (char.aiming) {
				if (char.shootingleft) {
					shoot(char.x,char.y,mouseX+random(-char.accuracy,char.accuracy),mouseY+random(-char.accuracy,char.accuracy),random(9,11));
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
	charmoveplatorm = function() {
		char.moving = false;
		if (keyPressed) {
			if (movstyle == "WASD") {
				if (keys[65]) {
					char.x-=char.speed;
					char.moving = true;
					char.dir = "left";
				}
				if (keys[68]) {
					char.x+=char.speed;
					char.moving = true;
					char.dir = "right";
				}
				if (keys[87]) {
					if (char.jumping == false) {
						char.vertspeed -= 10-grav; 
						char.y -= char.vertspeed;
						char.jumping = true;
					}
				}
			}			
		}
		char.y += grav;
		if (char.y > height) {
			char.y -= grav;
			char.jumping = false;
			char.vertspeed = 0;
		}		
	};
	
	charmovetopdown = function() {		
		char.moving = false;
		//char.aiming;
		char.a = atan2(char.y-char.ty,char.x-char.tx);
		char.a2 = atan2(char.y-mouseY,char.x-mouseX);
		if (keys[32] == true) {
			char.aiming = true;
			if (mouseIsPressed) {
				if (mouseButton == RIGHT) {
					char.shootingright = true;
				} else {
					char.shootingright = false;
				}
				if (mouseButton == LEFT) {
					char.shootingleft = true;
				} else {
					char.shootingleft = false;
				}
			} else {
				char.shootingright = false;
				char.shootingleft = false;
			}	
		} else {
			char.aiming = false;		
			char.shootingright = false;
			char.shootingleft = false;
		}
		// WASD keys
		if (keyPressed) {
			if (movstyle == "WASD") {
				if (keys[65]) {
				    char.tx-=char.speed;
					char.moving = true;
				}
				if (keys[68]) {
				    char.tx+=char.speed;
					char.moving = true;
				}
				if (keys[87]) {
				    char.ty-=char.speed;
					char.moving = true;
				}
				if (keys[83]) {
				    char.ty+=char.speed;
					char.moving = true;
				}
			}
			if (movstyle == "arrows") {
				// Arrow keys
				if (keys[37]) {
				    char.tx-=char.speed;
					char.moving = true;
				}
				if (keys[39]) {
				    char.tx+=char.speed;
					char.moving = true;
				}
				if (keys[38]) {
				    char.ty-=char.speed;
				    char.moving = true;
				}
				if (keys[40]) {
				    char.ty+=char.speed;
				    char.moving = true;
				}
			}
		}
		
		if (char.moving == false) {
			if (char.tx > char.x-cos(char.a)*char.speed) {
				char.tx -= char.speed;
			}
			if (char.tx < char.x+cos(char.a)*char.speed) {
				char.tx += char.speed;
			}
			if (char.ty > char.y-sin(char.a)*char.speed) {
				char.ty -= char.speed;
			}
			if (char.ty < char.y+sin(char.a)*char.speed) {
				char.ty += char.speed;
			}
		}
		/*if (char.tx > char.x+(3*char.speed)) {
			char.tx -= char.speed;
		}
		if (char.tx < char.x-(3*char.speed)) {
			char.tx += char.speed;
		}
		if (char.ty > char.y+(3*char.speed)) {
			char.ty -= char.speed;
		}
		if (char.ty < char.y-(3*char.speed)) {
			char.ty += char.speed;
		}*/
		if (dist(char.x,char.y,char.tx,char.ty) > char.speed*6) {
			char.tx+=cos(char.a)*(char.speed);
			char.ty+=sin(char.a)*(char.speed);
		}
		
		if (char.moving == true) {		
			char.x -= cos(char.a)*char.speed;
			char.y -= sin(char.a)*char.speed;
		}
		/*fill(255);
		ellipse(char.tx,char.ty,10,10);
		fill(255,0,0);
		ellipse(char.x,char.y,10,10);*/
	};
	/*level = function(mode) {
		background(100);	
		charmovetopdown();
		char(char.x,char.y,0,char.speed,100,10,mode);
		drawbullets();
	};
	
	//Levels!
	level1 = function() {
		level("topdown");
	};*/
};

draw = function() {
	background(100);	
	charmovetopdown();
	drawbullets();
	displaychar(char.x,char.y,char.speed,100,10,"topdown");	
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
