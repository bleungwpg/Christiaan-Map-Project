new p5.Image();

function preload() {
	// load video into computer memory

}

function setup() {

	// create canvas
	createCanvas(553, 605);



	// load image data
	worldmap = loadImage("images/worldmap.png");



}

function draw() {

	background(0,125,125);

	image(worldmap,0,0);
	
//	get();
	
//	noFill();
	fill(255,0,0);
	text(mouseX,10,10);
	text(mouseY,80,10);
	
	// one - five YORKTON
	ellipse(331,81,90,90);
	ellipse(265,143,25,90);
	ellipse(384,134,60,60);
	ellipse(309,164,60,60);
	ellipse(306,223,80,40);

	// six - nine CALDONIA
	ellipse(72,548,80,80);
	ellipse(120,367,110,180);
	ellipse(181,202,130,80);
	ellipse(212,92,80,110);
	ellipse(455,151,50,50);
	
	// eleven - fifteen
	ellipse(397,189,35,35);
	ellipse(385,248,60,60);
	ellipse(460,223,95,60);
	ellipse(430,307,100,70);
	
	// sixteen - eighteen
	ellipse(245,492,60,60);
	ellipse(227,436,35,35);
	ellipse();
}


