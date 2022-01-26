 var Nose_x = 0;
 var Nose_y = 0;
function preload() {
	world_start = loadSound("world_start.wav");
	Mario_die = loadSound("mariodie.wav");
	Jump = loadSound("jump.wav");
	Kick = loadSound("kick.wav");
	Coin_mario=loadSound("coin.wav");
	Game_over=loadSound("gameover.wav")
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas')
		instializeInSetup(mario);
		video=createCapture(VIDEO);
		video.size(800,300);
		video.parent('game_console');

		poseNet=ml5.poseNet(video,modelLoaded);
		poseNet.on("pose",gotPoses)
}
function modelLoaded(){
	console.log("Model is Loaded!!");
}
function gotPoses(Result){
	console.log(Result);
	if(Result.length>0){
		Nose_x=Result[0].pose.nose.x;
		Nose_y=Result[0].pose.nose.y;
	}
	
}
function draw() {
	game();
	console.log(Nose_x + "," + Nose_y);
	
}






