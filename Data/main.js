button = function(con) {
	x = con.x;
	y = con.y;
	width = con.width;
	height = con.height;
	text = con.text;
};

setup = function() {
	startbutton = button({x:width/2,y:height/2,width:150,height:80,text:"Start"});
};

draw = function() {
	background(10,50,50);
	
};
