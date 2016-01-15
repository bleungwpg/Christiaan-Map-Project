var rChart = [];
var gChart = [];
var bChart = [];
var aChart = [];
var border = [];

var r = [];
var g = [];
var b = [];
var a = [];

var continentNum;

function preload() {
	knock = loadSound('sounds/knock2.m4a');
	worldmap = loadImage("images/worldmap.png");
	worldmapbg = loadImage("images/worldmapbg.png");
	chart = loadImage("images/worldmapbgchart.png");
	for (i = 1; i < 5; i++)
	{
		border[i] = loadImage("images/"+i+".png");
	}

}

function setup() {

	continentNum = 0;

	rChart[0] = 140;
	gChart[0] = 0;
	bChart[0] = 0;
	rChart[1] = 217;
	gChart[1] = 0;
	bChart[1] = 0;
	rChart[2] = 255;
	gChart[2] = 0;
	bChart[2] = 0;
	rChart[3] = 255;
	gChart[3] = 77;
	bChart[3] = 77;
	rChart[4] = 255;
	gChart[4] = 115;
	bChart[4] = 115;

	rChart[5] = 255;
	gChart[5] = 191;
	bChart[5] = 191;
	rChart[6] = 140;
	gChart[6] = 140;
	bChart[6] = 0;
	rChart[7] = 217;
	gChart[7] = 217;
	bChart[7] = 0;
	rChart[8] = 255;
	gChart[8] = 255;
	bChart[8] = 0;

	rChart[9] = 255;
	gChart[9] = 255;
	bChart[9] = 38;
	rChart[10] = 255;
	gChart[10] = 255;
	bChart[10] = 115;
	rChart[11] = 255;
	gChart[11] = 255;
	bChart[11] = 191;
	rChart[12] = 0;
	gChart[12] = 140;
	bChart[12] = 0; 
	rChart[13] = 0;
	gChart[13] = 217;
	bChart[13] = 0;
	rChart[14] = 0;
	gChart[14] = 255;
	bChart[14] = 0; 


	rChart[15] = 77;
	gChart[15] = 255;
	bChart[15] = 77; 
	rChart[16] = 115;
	gChart[16] = 255;
	bChart[16] = 115;
	rChart[17] = 191;
	gChart[17] = 255;
	bChart[17] = 191; 


	rChart[18] = 0;
	gChart[18] = 140;
	bChart[18] = 140; 
	rChart[19] = 0;
	gChart[19] = 217;
	bChart[19] = 217;
	rChart[20] = 0;
	gChart[20] = 255;
	bChart[20] = 255; 
	rChart[21] = 77;
	gChart[21] = 255;
	bChart[21] = 255; 
	rChart[22] = 115;
	gChart[22] = 255;
	bChart[22] = 255; 
	rChart[23] = 191;
	gChart[23] = 255;
	bChart[23] = 255; 
	rChart[24] = 0;
	gChart[24] = 0;
	bChart[24] = 140; 


	rChart[25] = 0;
	gChart[25] = 0;
	bChart[25] = 217; 
	rChart[26] = 0;
	gChart[26] = 0;
	bChart[26] = 255; 
	rChart[27] = 77;
	gChart[27] = 77;
	bChart[27] = 255; 
	rChart[28] = 115;
	gChart[28] = 115;
	bChart[28] = 255; 
	rChart[29] = 191;
	gChart[29] = 191;
	bChart[29] = 255; 
	rChart[30] = 140;
	gChart[30] = 0;
	bChart[30] = 140; 
	rChart[31] = 217;
	gChart[31] = 0;
	bChart[31] = 217; 
/*
	createCanvas(6,6);
	image(chart, 0, 0);
	loadPixels();
	for (i = 0, j = 0; j < 33; i=i+4, j++)
	{
		rChart[j] = pixels[i];
		gChart[j] = pixels[i+1];
		bChart[j] = pixels[i+2];
		aChart[j] = pixels[i+3];
	}
  */

	createCanvas(553,603);
	image(worldmapbg, 0, 0);
	loadPixels();


	row = 1;
	//  row = 153;
	d = pixelDensity();
	startingPixel = row*0*d;
	startingPixelArray = startingPixel*4;


	for (i = 0, j = 0; j < 552*2*605*2; i=i+4, j++)
	{
		r[j] = pixels[i];
		g[j] = pixels[i+1];
		b[j] = pixels[i+2];
		a[j] = pixels[i+3];
	}
	previousContinentNum = 1;
	createCanvas(553,605);
}

function draw()
{
	background(0,0,0);
	image(worldmap, 0, 0);
	q = (mouseX+mouseY*553*2)*2;
	if (mouseX > 553 || mouseY > 605)
	{
		fill(0,0,0);
	}
	else
	{
		for (j = 0; j < 32; j++)
		{
			fill(255,0,0);
			//text(rChart[j]+" "+gChart[j]+" "+bChart[j]+" "+aChart[j],575,200+j*50);

			if (rChart[j] == r[q] && gChart[j] == g[q] && bChart[j] == b[q])
			{
				continentNum = j+1;
			}
		}

	}

	//  	fill(rChart[continentNum],gChart[continentNum],bChart[continentNum]);
	//  rect(560,10,50,50);
	fill(0,0,0);
	text(continentNum,500,35);
	if (continentNum > 0 && continentNum < 5)
	{
		image(border[continentNum],0,0);
	}
	

	if (continentNum != previousContinentNum)
	{
		knock.setVolume(0.5);
		knock.play();
	}

	previousContinentNum = continentNum;
	//  text(r[q]+" "+g[q]+" "+b[q]+" "+a[q],575,90);
}