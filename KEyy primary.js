
var sketchProc=function(processingInstance){ with (processingInstance){

// Messing around.
// Don't look at this.

size(400,400);
frameRate(60);
angleMode = "degrees";

var version = "0.1 Alpha";

// Here are my variable declarations.  As if that wasn't obvious.
var laggy = true; // All this does is affect shadow density.
var accuracy = 4; // Lower numbers are more accurate.
var charbull = 1; // How much damage the players's bullets do.
var keys = [];
var keyPressed = function() {
    keys[keyCode] = true;
};
var keyReleased = function() {
    keys[keyCode] = false;
};
var initiald;
var tertiard;
var quadruplegic;
var charx = 200;
var chary = 350;
var coretemp=60;
var gun=true;
var flashtime=0;
var flash;
var hitx;
var hity;
var charammo = 100;
var truckx;
var trucky;
var trucka;
var curstype = floor(random(1,4));
var movstyle = "WASD";
var d = 1;
var fight;
var type;
var getup;
var leave;
var loc = 0;
var loctime = 0;
var fedora = function(x,y,s,a) {
    rectMode(CORNER);
    pushMatrix();
    translate(x,y);
    rotate(a);
    noStroke();
    fill(99, 73, 0);
    rect(0,0,s,s/2);
    
    rect(0,-s/5,s/2.5,s/3);
    rect(s-(s/2.5),-s/5,s/2.5,s/3);
    
    ellipse(s,s/2,s,s/4);
    ellipse(s/2,s/2,s*2,s/4);
    
    fill(0, 0, 0);
    rect(0,s/4,s,s/6);
    popMatrix();
};
var introvars = {
    fedangle: 60,
    fedx: -100,
    fedy: height/2,
    fade: 0,
    time:0,
};
var logoup = false;
var logosize = 200;

// Standard colors
var mainfont = createFont("Times New Roman");
var termfont = createFont("Monospace");
var logofont = createFont("serif");
var sback = color(128, 102, 79);
var primaryc = [59, 59, 59];//grey
var secondaryc = [96, 213, 219];//blue
var tertiaryc = [222, 137, 0];//orange
// I make these this way because otherwise I can't change the alpha.  Weird.

// Random colors
var c1 = color(random(0,20),random(50,210),random(100,200));//A greenish color
var c2 = color(random(200,255),random(100,200),random(0,100));//Red/purple
var c3 = random(60,160); //Gray

var grass = color(random(0,50),random(200,230),random(90,90));
var leaves = color(random(20,60),random(150,155),random(40,70));
var bush = function(x,y,a,s) {
    pushMatrix();
    translate(x,y);
    rotate(a);
    scale(s);
    stroke(c1);
    strokeWeight(0.5);
    fill(sback);
    ellipse(0,0,10,10);
    
    fill(leaves);
    triangle(4,2,-4,2,0,7);
    triangle(-4,-4,-4,3,-7,-2);
    triangle(4,-3,5,3,8,-4);
    triangle(-2,-4,3,-2,0,-9);
    triangle(-5,1,-1,5,-6,9);
    triangle(3,-2,2,5,8,7);
    triangle(-4,0,0,-5,-6,-9);
    popMatrix();
};
var groundgen = function(rocks,bushes,numbushes,numrocks) {
    for (var r = 0;r<numrocks;r++) {
        rocks.push({x:random(400),y:random(400),s:random(7),c:random(90,200)});
    }
    for(var b=0;b<numbushes;b++) {
        bushes.push({x:random(400),y:random(400),a:random(360),s:random(2)});
    }
};
var groundisplay = function(rocks,bushes) {
    for (var r2 = 0;r2<rocks.length;r2++) {
        fill(rocks[r2].c,rocks[r2].c,rocks[r2].c);
        ellipse(rocks[r2].x,rocks[r2].y,rocks[r2].s,rocks[r2].s);
    }
    
    for (var b2=0;b2<bushes.length;b2++) {
        bush(bushes[b2].x,bushes[b2].y,bushes[b2].a,bushes[b2].s);
    }
};
var caveroof = function(x,y,a) {
    pushMatrix();
    translate(x,y);
    rotate(a);
    noStroke();
    
    fill(c3-10,c3-10,c3-10);
    ellipse(10,-10,15,30);
    ellipse(0,-15,10,10);
    ellipse(-1,16,9,9);
    ellipse(1,-18,8,8);
    ellipse(5,20,11,11);
    ellipse(14,5,16,16);
    ellipse(12,8,17,17);
    ellipse(10,20,16,16);
    
    ellipse(20,25,30,30);
    popMatrix();
};
var cavefloor = function(x,y,a) {
    pushMatrix();
    translate(x,y);
    rotate(a);
    noStroke();
    fill(0,0,0);
    ellipse(0,0,20,35);
    
    popMatrix();
};
var cargotruck = function(x,y,a,s) {
    pushMatrix();
    translate(x,y);
    rotate(a);
    scale(s);
    if (dist(charx,chary,x,y) < 20) {
        
    } else {
        
    }
    
    fill(c3-40);
    rect(-14,-25,6,12,5);
    rect(14,-25,6,12,5);
    
    rect(-14,25,6,12,5);
    rect(14,25,6,12,5);
    
    rect(-14,40,6,12,5);
    rect(14,40,6,12,5);
    
    fill(c3-10);
    rect(0,0,25,40);
    rect(0,35,29,60);
    rect(0,-25,31,20);
    rect(0,-35,27,10);
    rect(0,-40,25,10);
    
    fill(secondaryc[0],secondaryc[1],secondaryc[2]);
    arc(0,-25,19,10,180,360);
    
    fill(c3-15);
    rect(0,-15,22,25,5);
    rect(0,-25,2,10);
    
    fill(tertiaryc[0],tertiaryc[1],tertiaryc[2]);
    rect(5,-5,2,2);
    rect(-5,-5,2,2);
    rect(5,5,2,2);
    rect(-5,5,2,2);
    
    popMatrix();
};

var headlights = function(x,y) {
    var a = atan2(mouseY-y,mouseX-x);
    pushMatrix();
    translate(x,y);
    rotate(a);
    if (laggy === true) {
        fill(140,140,140,10);
        for (var h2=500;h2<780;h2+=1) {
            pushMatrix();
            rotate(h2);
            triangle(-15,0,-600,-90,-600,90);
            popMatrix();
        }
        fill(0,0,0,100);
        for (var h=220;h<500;h+=2) {
            pushMatrix();
            rotate(h);
            triangle(-15,0,-600,-90,-600,90);
            popMatrix();
        }
    } else {
        fill(0,0,0,200);
        for (var h=220;h<500;h+=5) {
            pushMatrix();
            rotate(h);
            triangle(-15,0,-600,-90,-600,90);
            popMatrix();
        }
    }
    
    popMatrix();
};
var muzzleflash= function(x,y,a,s) {
    pushMatrix();
    translate(x,y);
    rotate(a);
    if (flashtime > s) {
        flash = true;
        flashtime = 0;
    }
    flashtime ++;
    
    if (flash) {
        fill(255,240,240,190);
        rect(0,-15,2,random(8,10));
        rect(random(-1,2),-14,2,7);
        rect(-3,-16,random(0,2),random(7,9));
        rect(0,-10,8,1);
        
        for (var f=0;f<100;f+=5) {
            fill(255,255,255,100-f*3);
            ellipse(0,-10,f*3,f*3);
        }
        flash = false;
    }
    
    popMatrix();
};
var charshoot = function(mode) {
    // Semi auto
    if (mode === 1) {
        
    }
    // Full auto
    if (mode === 2) {
        hitx = null;
        hity = null;
        if (charammo > 0) {
            if (flashtime > 2) {
                flash = true;
                flashtime = 0;
            }
            flashtime ++;
            if (flash) {
                hitx = mouseX+random(-accuracy,accuracy);
                hity = mouseY+random(-accuracy,accuracy);
                stroke(250,250,210,200);
                strokeWeight(2);
                line(charx,chary,hitx,hity);
                charammo -= 1;
                flash = false;
            }
            noStroke();
            muzzleflash(charx,chary,atan2(mouseY-chary,mouseX-charx)+90,2);
        }
    }
    noStroke();
};

var truckorplane = floor(random(0,2));//0=truck,1=condor

var mouseloc = function(x1,y1,x2,y2) {
    if (mouseX > x1 && mouseX < x2 && mouseY > y1 && mouseY < y2) {
        return true;
    } else {
        return false;
    }
};
var button = function(x,y,w,h,txt,tar,func) {
    rectMode(CENTER);
    stroke(secondaryc[0],secondaryc[1],secondaryc[2]);
    strokeWeight(2);
    fill(tertiaryc[0],tertiaryc[1],tertiaryc[2]);
    rect(x,y,w,h,10);
    
    fill(primaryc[0],primaryc[1],primaryc[2]);
    textFont(mainfont,30);
    text(txt,x,y);
    
    if (mouseloc(x-w/2,y-w/2,x+w/2,y+h/2)) {
        fill(secondaryc[0],secondaryc[1],secondaryc[2]);
        rect(x,y,w,h,10);
        fill(primaryc[0],primaryc[1],primaryc[2]);
        text(txt,x,y);
        if (mousePressed===true&&loctime>15) {
            
            if (func === "laggy") {
                if (laggy === true) {
                    laggy = false;
                } else {
                    laggy = true;
                }
            } else if (func === "keyz") {
                if (movstyle === "WASD") {
                    movstyle = "arrows";
                } else {
                    movstyle = "WASD";
                }
            } else {
                loc = tar;
            }
            loctime = 0;
        }
    }
    
};

var moose = function() {
    if (fight === false) {
        fill(c1);
        stroke(c2);
        strokeWeight(1);
        triangle(mouseX,mouseY,mouseX,mouseY+20,mouseX+15,mouseY+20);
    } else if (fight === true) {
        if (curstype === 1) {
            fill(secondaryc[0],secondaryc[1]+60,secondaryc[2]);
            rect(mouseX-1,mouseY-4,1,6);
            rect(mouseX+1,mouseY-4,1,6);
            rect(mouseX-1,mouseY+4,1,6);
            rect(mouseX+1,mouseY+4,1,6);
            
            rect(mouseX-4,mouseY-1,6,1);
            rect(mouseX+4,mouseY-1,6,1);
            rect(mouseX-4,mouseY+1,6,1);
            rect(mouseX+4,mouseY+1,6,1);
            
            rect(mouseX-7,mouseY,1,3);
            rect(mouseX+7,mouseY,1,3);
            rect(mouseX,mouseY-7,3,1);
            rect(mouseX,mouseY+7,3,1);
        } else if (curstype === 2) {
            pushMatrix();
            translate(mouseX,mouseY);
            var m = atan2(chary-mouseY,charx-mouseX);
            rotate(m);
            fill(c1);
            triangle(-3,-2,-10,0,-3,2);
            triangle(2,-2,7,0,2,2);
            fill(c2);
            ellipse(0,0,5,5);
            popMatrix();
        } else if (curstype === 3) {
            fill(c1);
            ellipse(mouseX,mouseY,9,9);
            fill(c2);
            ellipse(mouseX,mouseY,3,3);
        }
    }
};

var logo = function(type,tar) {
    loctime++;
    background(c3+10,c3+10,c3+10);
    textFont(logofont,20);
    textAlign(CENTER,CENTER);
    noStroke();
    if (type === "Light") {
        fill(c3-70,c3-70,c3-70);
        ellipse(200,170,200,200);
        text("RECON MK.IV",200,330);
        textFont(termfont,10);
        textAlign(LEFT);
        text("Skytech Heavy Industries",10,15);
        textSize(6);
        text("TM",157,12);
        pushMatrix();
        translate(200,170);
        rotate(loctime*2);
        fill(secondaryc[0],secondaryc[1],secondaryc[2]);
        ellipse(0,0,30,30);
        for(var c = 0;c<360;c+=360/3) {
            pushMatrix();
            rotate(c);
            fill(secondaryc[0],secondaryc[1],secondaryc[2]);
            ellipse(0,-70,30,30);
            fill(c3+10,c3+10,c3+10);
            rect(0,-35,5,30);
            
            popMatrix();
        }
        popMatrix();
        
    } else if (type === "Medium") {
        fill(0,0,0);
        ellipse(200,200,logosize,logosize);
        if (logoup === true) {
            logosize += cos(logosize*2)+1;
        } else if (logoup === false) {
            logosize -= cos(logosize*2)+1;
        }
        if (logosize>250) {
            logoup = false;
        }
        if (logosize<200) {
            logoup = true;
        }
        fill(tertiaryc[0],tertiaryc[1],tertiaryc[2]);
        pushMatrix();
        translate(200,200);
        rotate(loctime);
        ellipse(0,(logosize/2)-30,25,25);
        ellipse(0,-(logosize/2)+30,25,25);
        popMatrix();
        textFont(termfont,30);
        text("MK.VII",200,200);
        text("Utility",200,350);
        fill(c3-70,c3-70,c3-70);
        textFont(termfont,10);
        textAlign(LEFT);
        text("Skytech Heavy Industries",10,15);
        textSize(6);
        text("TM",157,12);
    } else if (type === "Heavy") {
        fill(0);
        ellipse(200,200,230,230);
        fill(tertiaryc[0],tertiaryc[1],tertiaryc[2]);
        rect(200,200,180,100,10);
        textFont(termfont,40);
        fill(0);
        text("Heavy MK.II",200,200);
        textSize(20);
        text("Visuals online",200,50);
        textFont(termfont,10);
        textAlign(LEFT);
        text("Skytech Heavy Industries",10,15);
        textSize(6);
        text("TM",157,12);
        
        
        pushMatrix();
        translate(200,315);
        if (loctime < 150) {
            rotate(loctime/2);
        } else {
            rotate(150/2);
        }
        arc(0,-115,260,260,270,450);
        popMatrix();
        
        
        pushMatrix();
        translate(200,316);
        if (loctime < 150) {
            rotate(-loctime/2);
        } else {
            rotate(-150/2);
        }
        arc(0,-115,260,260,90,270);
        popMatrix();
    }
    
    fill(0,0,0,255-loctime*2);
    rect(200,200,width,height);
    
    if (mousePressed&&loctime>15) {
        loctime = 0;
        fight = false;
        loc = tar;
    } else if (loctime>300) {
        loctime = 0;
        fight = false;
        loc = tar;
    }
};

// The necessary setup.
setup = function() {
    textAlign(CENTER,CENTER);
    initiald = floor(random(1,4));
    // Deja vu!  I've just seen this variable before!
    var secondaryd = function() {
        if (initiald === 1) {
            //The first branch
            tertiard = floor(random(1,3));
            quadruplegic = ["Light",tertiard];
        }
        if (initiald === 2) {
            //The second branch
            tertiard = floor(random(3,5));
            quadruplegic = ["Medium",tertiard];
        }
        if (initiald === 3) {
            //The umpteenth branch
            tertiard = 6;
            quadruplegic = ["Heavy",tertiard];
        }
        return tertiard, quadruplegic;
    };
    var third = function() {
        // Character creation.
        type = [secondaryd(initiald)];
    };
    secondaryd();
    third();
    // Gotta call all dem functions now.
};
// Execution.
setup();

var charmaxhealth = 100+(3*quadruplegic[1]);
var charhealth = charmaxhealth*0.75;

// Creating the story...
// Beginning
{
var opning = ["You awake in a strange place.","You wake up.","You come to your senses.","Your eyes flicker open."];
var envir1 = ["It is very cold here.","You feel a sudden chill.","This place is cold and dim.","You are alone.","You are very cold."];
var surroundings1 = ["You are in a small log cabin.","A small fire flickers nearby.","Trees moan above your head.","You are lying in a ditch."];
var lightgetup = ["You hop to your feet.","You spring to your feet.","You jump up."];
var mediumgetup = ["You stand up.","You clamber to your feet.","You climb to your feet."];
var heavygetup = ["You haul yourself to your feet.","You stand up slowly.","Your knees groan as you stand up.","You haul yourself up."];

if (quadruplegic[0]==="Light") {
    getup = lightgetup[floor(random(lightgetup.length))];
} else if (quadruplegic[0]==="Medium") {
    getup = mediumgetup[floor(random(mediumgetup.length))];
} else if (quadruplegic[0]==="Heavy") {
    getup = heavygetup[floor(random(heavygetup.length))];
}
}
var charinitialocation = floor(random(surroundings1.length));

if (charinitialocation === 0) {
    // The cabin
    if (quadruplegic[0]==="Light") {
        leave = ["You open the door of the cabin and step outside.","You creep outside.","You tiptoe outside."];
    } else if (quadruplegic[0]==="Medium") {
        leave = ["You step outside.","You walk outside."];
    } else if (quadruplegic[0]==="Heavy") {
        leave = ["You tear the door off its hinges and walk outside.","You shove open the door and walk outside."];
    }
} else if (charinitialocation === 1) {
    // campfire
    if (quadruplegic[0]==="Light") {
        leave=["The fire hisses as you walk away.","You stand up and leave the fire."];
    } else if (quadruplegic[0]==="Medium") {
        leave=["You kick at the fire, then leave."];
    } else if (quadruplegic[0]==="Heavy") {
        leave=["You stomp on the fire until it's a pile of ash."];
    }
} else if (charinitialocation === 2) {
    // trees
    if (quadruplegic[0]==="Light") {
        leave=["The trees hiss at you as you walk to a clearing."];
    } else if (quadruplegic[0]==="Medium") {
        leave=["You push your way through the trees until you find a clearing."];
    } else if (quadruplegic[0]==="Heavy") {
        leave=["The trees splinter before your mighty fists until a wide area is cleared.","You uproot several trees in a sudden rage."];
    }
} else if (charinitialocation === 3) {
    // ditch
    if (quadruplegic[0]==="Light") {
        leave=["You hop up out of the ditch.","You jump out of the ditch.","You leap out of the ditch."];
    } else if (quadruplegic[0]==="Medium") {
        leave=["You climb slowly out of the ditch.","You climb out of the ditch."];
    } else if (quadruplegic[0]==="Heavy") {
        leave=["You lumber up out of the ditch.","You lumber out of the ditch."];
    }
}

var cold = ["A breeze chills you to the heart.","A cold wind bites at you.","The cold air lashes at you.","Cold wind whips around you.","A cold wind whips your clothes."];
var seecave = ["In the distance, you spot a small cave.","You spot a cave in the distance.","Looking around, you see a cave.","Glancing around, you see a cave.","You look around and see a small cave."];
if (quadruplegic[0]==="Light") {
    var gotocave = ["You begin to jog towards it.","You run closer.","You sprint toward it."];
} else if (quadruplegic[0]==="Medium") {
    var gotocave = ["You walk towards it.","You walk slowly closer."];
} else if (quadruplegic[0]==="Heavy") {
    var gotocave = ["You rumble towards it, knees grinding.","You grumble towards it.","You stalk towards it.","You begin to lumber towards it.","You creak as you stalk closer."];
}

var entercave = ["You retreat into the cave.","You squeeze into the cave.","You step into the cave."];
var thinkcrawlers = ["The crawlers... where did they come from?","How did the crawlers get here?","Why are the crawlers here?"];
var screamcrawlers = ["The creatures squeal at you from outside.","They scream at you from just outside.","They growl at you from outside."];
var hide = ["You pull your knees up to your chest and wait.","You sit down and wait for them to leave."];

var wakeup = ["It is now pitch black.","Night has fallen.","It is nearly midnight.","It is the middle of the night."];
var noize = ["You hear a strange rumbling noise.","A loud rumble shakes the cave.","A rumble from outside startles you."];
var leavecave = ["You flick on your headlights and clank outside.","You turn on your spotlights and leave the cave."];

var charstory = [opning[floor(random(opning.length))],envir1[floor(random(envir1.length))],surroundings1[charinitialocation],getup];

var charstory2 = [leave[floor(random(leave.length))],cold[floor(random(cold.length))],seecave[floor(random(seecave.length))],gotocave[floor(random(gotocave.length))]];

var charstory3 = [entercave[floor(random(entercave.length))],thinkcrawlers[floor(random(thinkcrawlers.length))],screamcrawlers[floor(random(screamcrawlers.length))],hide[floor(random(hide.length))]];

var charstory4 = [wakeup[floor(random(wakeup.length))],noize[floor(random(noize.length))],leavecave[floor(random(leavecave.length))]];

// Now I've got to make the character.
var charspeed = (20-quadruplegic[1])/11;
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
var charmove = function() {
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

var lightchar = function(x,y,s,a) {
    pushMatrix();
    translate(x,y);
    scale(s);
    rotate(a);
    noStroke();
    
    //Body
    fill(c1);
    ellipse(4,0,6,3);
    rect(0,0,4,7);
    
    fill(primaryc[0],primaryc[1],primaryc[2]);
    rect(3,3,10,1);
    rect(1,0,9,1);
    //rect(5,-5,15,4);
    ellipse(2,-6,6,6);
    rect(2,5,10,3);
    
    ellipse(-4,4,7,5);
    ellipse(-4,-4,7,5);
    
    ellipse(-2,7,7,5);
    ellipse(-2,-7,7,5);
    
    fill(secondaryc[0],secondaryc[1],secondaryc[2]);
    rect(-3,0,3,10,20);
    rect(0,4,4,6);
    
    popMatrix();
};
var medchar = function(x,y,s,a) {
    pushMatrix();
    translate(x,y);
    scale(s);
    rotate(a);
    noStroke();
    
    //Arms
    fill(primaryc[0]+50,primaryc[1]+50,primaryc[2]+50);
    ellipse(0,10,5,5);
    ellipse(0,-10,5,5);
    //Clothes
    fill(c2);
    rect(0,0,10,15,10);
    rect(-3,1,7,16,10);
    rect(-2,6,4,7);
    triangle(5,5,-1,-14,-5,-4);
    //Head
    fill(primaryc[0],primaryc[1],primaryc[2]);
    ellipse(2,0,8,8);
    triangle(-4,0,1,4,1,-4);
    //Backpack
    fill(primaryc[0]+50,primaryc[1]+50,primaryc[2]+50);
    rect(-6,0,6,10);
    
    fill(secondaryc[0],secondaryc[1],secondaryc[2]);
    arc(3,1,5,6,0,90);
    arc(3,-1,5,6,270,360);
    popMatrix();
};
var heavychar = function(x,y,s,a) {
    pushMatrix();
    translate(x,y);
    scale(s);
    rotate(a);
    noStroke();
    
    fill(c2);
    ellipse(0,0,15,13);
    
    //Armor
    fill(primaryc[0],primaryc[1],primaryc[2]);
    rect(2,-4,18,6);
    rect(2,4,18,6);
    rect(-1,-6,17,6);
    rect(-1,6,17,6);
    rect(7,8,6,1);
    rect(-1,-9,6,3);
    //Spikes
    rect(9,2,7,1);
    rect(9,-6,7,1);
    rect(9,6,7,1);
    rect(9,-2,7,1);
    //Arm
    ellipse(0,9,8,8);
    rect(1,12,9,2);
    
    //Power cells
    fill(secondaryc[0],secondaryc[1],secondaryc[2]);
    ellipse(2,-5,4,4);
    ellipse(2,5,4,4);
    ellipse(-4,-5,4,4);
    ellipse(-4,5,4,4);
    
    popMatrix();
};

var char = function(x,y,s,type,strength) {
    var a = atan2(mouseY-y,mouseX-x);
    if (gun===true) {
        if (mousePressed) {
            charshoot(2);
        }
    }
    if (type === "Light") {
        lightchar(x,y,s,a);
    } else if (type === "Medium") {
        medchar(x,y,s,a);
    } else if (type === "Heavy") {
        heavychar(x,y,s,a);
    }
    if (coretemp < 30 || coretemp > 200) {
        // Need to add death.
    }
    if (charhealth < 0) {
        charhealth = 0;
    } else if (charhealth > charmaxhealth) {
        charhealth = charmaxhealth;
    }
};

var displaycharhealth = function() {
    if (charx<116&&chary>345&&chary<380) {
        fill(0,0,0,50);
        rectMode(CORNER);
        rect(6,345,110,35);
        fill(tertiaryc[0],tertiaryc[1],tertiaryc[2],50);
    } else {
        fill(0,0,0);
        rectMode(CORNER);
        rect(6,345,110,35);
        fill(tertiaryc[0],tertiaryc[1],tertiaryc[2]);
    }
    textAlign(LEFT);
    textFont(termfont,10);
    text("Integrity: %"+floor((charhealth/charmaxhealth)*100),10,360);
    text("Core temp: "+coretemp,10,375);
    rectMode(CENTER);
};
var displayammo = function() {
    fill(0,0,0);
    if (charx>295&&charx<355&&chary>350&&chary<370) {
        fill(0,0,0,50);
    }
    
    rect(340,360,90,20);
    fill(tertiaryc[0],tertiaryc[1],tertiaryc[2]);
    if (charx>295&&charx<355&&chary>350&&chary<370) {
        fill(tertiaryc[0],tertiaryc[1],tertiaryc[2],50);
    }
    text("Bullets: "+charammo,302,363);
    if (charammo < 0) {
        charammo = 0;
    }
};

var chardamage = function(attack) {
    if (quadruplegic[1]/2 > 1) {
        charhealth -= (attack/(quadruplegic[1]/2));
    } else {
        charhealth -= attack;
    }
};

var crawlegs = -1;
var crawlswitch=false;
var crawler = function(x,y,a,c,s) {
    var dead = false;
    pushMatrix();
    translate(x,y);
    rotate(a);
    scale(c);
    fill(c3,c3,c3);
    rect(0,0,5,7);
    rect(-4,0,8,3);
    rect(-6,0,4,5);
    
    fill(c3-30,c3-30,c3-30);
    ellipse(2,0,3,3);
    rect(-4,0,8,1);
    if (dead === false) {
        if (crawlegs<0) {
            crawlswitch = false;
        } else if (crawlegs>4) {
            crawlswitch = true;
        }
        if (crawlswitch === false) {
            crawlegs += 0.05;
        } else {
            crawlegs -= 0.05;
        }
    }
    fill(c3-20,c3-20,c3-20);
    rect(crawlegs+2,-2,5,2);
    rect(4-crawlegs,+3,5,2);
    
    rect(-10+crawlegs/2,-3,5,2);
    rect(-8-crawlegs/2,+2,5,2);
    
    
    
    popMatrix();
};
var soldier = function(x,y,a,c,s) {
    
};
var showcrawlers = function(cs) {
    for (var c=1;c<cs.length;c++) {
        var c2;
        if (cs[c].h>0) {
            c2 = atan2(chary-cs[c].y,charx-cs[c].x);
            
            cs[c].x += cos(c2)*cs[c].s;
            cs[c].y += sin(c2)*cs[c].s;
            if (cs[c].x>charx-5&&cs[c].x<charx+5&&cs[c].y>chary-5&&cs[c].y<chary+5&&charhealth>0) {
                chardamage(7);
            }
        } else if (cs[c].h <= 0) {
            cs[c].dead = true;
        }
        crawler(cs[c].x,cs[c].y,c2,cs[0],cs[c].s);
        
        if (hitx>cs[c].x-4&&hitx<cs[c].x+4&&hity>cs[c].y-4&&hitx<cs[c].y+4) {
            cs[c].h -= 1;
        }
        /*
        println(cs[c].h);
        println(hitx+" "+hity);
        */
        /*
        if (cs[c].x>charx-10&&cs[c].y>chary-10&&cs[c].y<chary+10&&cs[c].x<charx+10) {
            cs[c].x-=cs[c].s;
        }
        if (cs[c].x<charx+10&&cs[c].y>chary-10&&cs[c].y<chary+10&&cs[c].x>charx-10) {
            cs[c].x+=cs[c].s;
        }
        
        if (cs[c].y>chary-10&&cs[c].x>charx-10&&cs[c].y<charx+10&&cs[c].y<chary+10) {
            cs[c].y-=cs[c].s;
        }
        if (cs[c].y<chary+10&&cs[c].x>charx-10&&cs[c].x<charx+10&&cs[c].y>chary-10) {
            cs[c].y+=cs[c].s;
        }*/
        
    }
};

var edges = function() {
    if (charx > width-5) {
        charx -= charspeed;
        if (chary < 5) {
            chary += charspeed;
        }
        if (chary > height-5) {
            chary -= charspeed;
        }
    } else if (charx < 5) {
        charx += charspeed;
        if (chary > height-5) {
            chary -= charspeed;
        }
        if (chary < 5) {
            chary += charspeed;
        }
    } else if (chary > height-5) {
        chary -= charspeed;
        if (charx > width-5) {
            charx -= charspeed;
        }
    } else if (chary < 5) {
        chary += charspeed;
        if (charx < 5) {
            charx += charspeed;
        }
    }
};

// Location, location...
var nextday = function(tar) {
    loctime ++;
    background(0,0,0);
    fill(255,255,255,loctime);
    textAlign(CENTER,CENTER);
    textFont(mainfont,50);
    text("Day "+d,200,200);
    if (mousePressed&&loctime>15) {
        loctime = 0;
        loc = tar;
    }
};
var options = function() {
    loctime ++;
    background(sback);
    fill(secondaryc[0],secondaryc[1],secondaryc[2]);
    textSize(30);
    text("Movement style",200,40);
    if (movstyle === "WASD") {
        button(200,100,170,60,"WASD",null,"keyz");
    } else if (movstyle === "arrows") {
        button(200,100,170,60,"Arrows",null,"keyz");
    }
    fill(secondaryc[0],secondaryc[1],secondaryc[2]);
    textSize(30);
    text("Shadow quality",200,170);
    if (laggy === true) {
        button(200,230,100,60,"High",null,"laggy");
    } else {
        button(200,230,100,60,"Low",null,"laggy");
    }
    
    button(340,340,70,40,"Back",1);
};
var help = function() {
    loctime += 1;
    background(sback);
    fill(0, 0, 0,loctime*3);
    textFont(mainfont,20);
    text("You are a cyborg.\n\nYou find yourself in an unknown land,\nunaware of your purpose.  Perhaps\nyour memory banks have been damaged.\n\nUse the keyboard to move.\nIf your core drops below 20 degrees\nor rises above 200 degrees you will\nmelt down.  Avoid monsters; they will try\n to eat you and may damage your components\n or body.",200,200);
    
    /*char(charx,chary,1,quadruplegic[0],quadruplegic[1]);
    charmove();
    headlights(charx,chary);*/
    
    if (mousePressed&&loctime > 15) {loc = 1;loctime = 0;}
};
var intro = function() {
        background(sback);
        introvars.time += 1;
        introvars.fade = introvars.time*2;
        
        introvars.fedx += 3-sin(20);
        introvars.fedy -=cos(5);
        introvars.fedangle -= cos(10);
        fedora(introvars.fedx,introvars.fedy,20,introvars.fedangle);
        
        fill(secondaryc[0], secondaryc[1], secondaryc[2], introvars.fade);
        textFont(mainfont, 40);
        text("KE",170,height/2);
        fill(tertiaryc[0],tertiaryc[1],tertiaryc[2],introvars.fade);
        textSize(55);
        text("yy",229,height/2.07);
        textSize(15);
        text("Version "+version,200,250);
        
        if (introvars.time > 200) {
            loc = 1;
        } else if (mousePressed === true) {
            loc = 1;
        }
};
var menu = function() {
    loctime += 1;
    noStroke();
    background(sback);
    
    fill(secondaryc[0], secondaryc[1], secondaryc[2]);
    textFont(mainfont, 40);
    text("KE",170,height/2);
    fill(tertiaryc[0],tertiaryc[1],tertiaryc[2]);
    textSize(55);
    text("yy",229,height/2.07);
        
    button(200,140,100,60,"Launch",1.2);
    button(200,260,100,60,"Help",-1);
    button(340,340,70,40,"OPT",-2);
    fill(0,0,0,200-loctime);
    rect(width/2,height/2,width,height);
};
var launch = function() {
    fight = 1;
    loctime++;
    background(0,0,0);
    noStroke();
    fill(grass);
    textAlign(LEFT);
    textFont(mainfont,13);
    text("Initiating wakeup sequence...\nWakeup successful\n\nCalculating...\n\nLocation: unknown\nTemperature: 15 degrees Celcius\nCore status: Operational\nCybernetic components: Partially operational\nOrganic components: Functioning below recommended parameters\nNearby life signs: potentially hostile\nChance of survival: null\n\nWeapons systems offline\n\nLeft arm in critical condition; requesting mechanic...\n\nRequest failed\n\nCommunications systems offline\n\nAutorepair initiated...\nAutorepair failed; not enough scrap",20,30);
    
    fill(0,0,0,255-loctime*2);
    rect(200,200,402,402);
    if (mousePressed&&loctime>15) {
        loctime = 0;
        loc = 1.3;
    }
    
};
var story = function() {
    loctime++;
    fill(c1);
    noStroke();
    rect(width/2-1,height/2-1,width+1,height+1);
    textFont(mainfont,20);
    for (var t=0;t<200;t+=50) {
        fill(tertiaryc[0],tertiaryc[1],tertiaryc[2],loctime-(t/5));
        text(charstory[t/50],200,100+t);
    }
    fill(0,0,0,200-loctime);
    rect(width/2,height/2,width,height);
    
    button(width/2,330,60,30,"nxt",3);
};
var story2 = function() {
    loctime++;
    fill(c2);
    noStroke();
    rect(width/2-1,height/2-1,width+1,height+1);
    textFont(mainfont,20);
    for (var t=0;t<200;t+=50) {
        fill(primaryc[0],primaryc[1],primaryc[2],loctime-t*2);
        text(charstory2[t/50],200,100+t);
    }
    fill(0,0,0,200-loctime);
    rect(width/2,height/2,width,height);
    
    button(width/2,330,60,30,"nxt",4);
};
// Level 1
{
    var rocks1 = [];
    var bushes1 = [];
    var crawlers1 = [1,{x:400,y:400,s:1,h:random(2,4)},{x:0,y:400,s:random(0.5,1),h:random(2,4)},{x:-20,y:200,s:random(0.5,1),h:random(2,4)}];
    var cave1 = [369,16,288];
    groundgen(rocks1,bushes1,20,90);
    var level1 = function() {
        loctime ++;
        fight = true;
        charmove();
        edges();
        background(grass);
        groundisplay(rocks1,bushes1);
        cavefloor(cave1[0],cave1[1],cave1[2]);
        char(charx,chary,1,quadruplegic[0],quadruplegic[1]);
        fill(0,0,0,loctime);
        textFont(mainfont,15);
        textAlign(LEFT);
        text("Strange creatures emerge from the bushes.",20,20);
        showcrawlers(crawlers1);
        
        caveroof(cave1[0],cave1[1],cave1[2]);
        
        displaycharhealth();
        
        fill(0,0,0,255-loctime*2);
        rect(width/2,height/2,width,height);
        
        if (charx > cave1[0]-10 && chary < cave1[1]) {
            loctime = 0;
            loc = 5;
        }
    };
}
var story3 = function() {
    loctime++;
    background(sback);
    textSize(17);
    textAlign(CENTER,CENTER);
    for (var t=0;t<200;t+=50) {
        fill(primaryc[0]-40,primaryc[1]-20,primaryc[2],loctime-t*2);
        text(charstory3[t/50],200,100+t);
    }
    fill(0,0,0,200-loctime);
    rect(width/2,height/2,width,height);
    
    button(width/2,330,60,30,"nxt",6);
};
var goout = function() {
    loctime++;
    background(0,0,0);
    textSize(18);
    for (var t=0;t<200;t+=50) {
        fill(primaryc[0]-40,primaryc[1]+20,primaryc[2]+40,loctime-t*2);
        text(charstory4[t/50],200,100+t);
    }
    fill(0,0,0,200-loctime);
    rect(width/2,height/2,width,height);
    
    button(width/2,330,60,30,"nxt",7);
};
// Level 2
{
    var level2 = function() {
        if (loctime === 0) {
            charx = cave1[0];
            chary = cave1[1];
        }
        fight = true;
        loctime ++;
        background(grass);
        charmove();
        edges();
        groundisplay(rocks1,bushes1);
        cavefloor(cave1[0],cave1[1],cave1[2]);
        
        cargotruck(180,300,290,1.5);
        char(charx,chary,1,quadruplegic[0],quadruplegic[1]);
        
        caveroof(cave1[0],cave1[1],cave1[2]);
        
        headlights(charx,chary);
        
        displaycharhealth();
        displayammo();
        
        fill(0,0,0);
        textAlign(LEFT);
        rectMode(CORNER);
        textFont(mainfont,12);
        rect(17,7,185,20);
        fill(255);
        text("The truck appears to be deserted.",20,20);
        
        rectMode(CENTER);
        
        fill(0,0,0,255-loctime*2);
        rect(width/2,height/2,width,height);
    };
}


draw = function() {
    cursor("NONE");
    fight = false;
    if (loc === -2) {
        options();
    }
    if (loc === -1) {
        help();
    }
    if (loc === 0) {
        intro();
    }
    if (loc === 1) {
        menu();
    }
    if (loc === 1.2) {
        launch();
    }
    if (loc === 1.3) {
        logo(quadruplegic[0],1.5);
    }
    if (loc === 1.5) {
        nextday(2);
    }
    if (loc === 2) {
        story();
    }
    if (loc === 3) {
        story2();
    }
    if (loc === 4) {
        level1();
    }
    if (loc === 5) {
        story3();
    }
    if (loc === 6) {
        goout();
    }
    if (loc === 7) {
        level2();
    }
    moose();
};
// The End
}};
