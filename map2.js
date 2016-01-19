var sheetonedata = [[]];
var sheetonemaxr;
var sheetonemaxc;

var sheettwodata = [[]];
var sheettwomaxr;
var sheettwomaxc;

var names = [];
var studentnum = [];
var fruit = [];
var ttsheet1;
var ttsheet2;
var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/19KOzMNajpUqEOwUiTSXU4Je6iW7A1pl3R2qykHqAg3w/pubhtml';


var rChart = [];
var gChart = [];
var bChart = [];
var aChart = [];
var border = [];

var red = [];
var green = [];
var blue = [];

var continentNum;
var startme

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
		red[j] = pixels[i];
		green[j] = pixels[i+1];
		blue[j] = pixels[i+2];
//		a[j] = pixels[i+3];
	}
	previousContinentNum = 1;
//	createCanvas(553,605);
	createCanvas(1253,605);
	
	startme = 1;
	sheetonemaxr = 0;
	sheettwomaxr = 0;
	init();
}

function draw()
{
	background(255,255,255);
	image(worldmap, 0, 0);
	q = (mouseX+mouseY*553*2)*2;
	
	if (startme == 1 && sheetonedata[0][0] == null)
	{
		fill(0,0,0);
		text("Mouse your mouse over regions 1 - 4 to see new changes",600,400);
	}
	else
	{
		startme = 0;
	}

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

			if (rChart[j] == red[q] && gChart[j] == green[q] && bChart[j] == blue[q])
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
	
	
	// show results of that province/state
	fill(0,0,0);
	if (sheetonedata[0][0] != null && sheettwodata[0][0] != null)
	{
		// selectively show country data based on position of mouse over country
		if (continentNum > 0 && continentNum < 5)
		{
			text("country number        leader                       country",600,75);
			text("country number        major export fruit      secretary of defense",600,175);
			for (col = 0; col < sheetonemaxc; col++)
			{
				text(sheetonedata[continentNum-1][col],600+col*110,100);	
			}
			for (col = 0; col < sheettwomaxc; col++)
			{
				text(sheettwodata[continentNum-1][col],600+col*110,200);	
			}
		}

					
					/*
					show all continent data
		for (row = 0; row < sheetonemaxr; row++)
		{
			for (col = 0; col < sheetonemaxc; col++)
			{
				text(sheetonedata[row][col],600+col*100,100+row*50);	
			}
		}

		for (row = 0; row < sheettwomaxr; row++)
		{
			for (col = 0; col < sheettwomaxc; col++)
			{
				text(sheettwodata[row][col],1000+col*150,100+row*50);	
			}
		}
*/
	}

}



function init() {
	ttsheet1 = Tabletop.init( { key: public_spreadsheet_url,
					 callback: showInfo1,
					 wanted: ["Sheet1"],
					  simpleSheet: true } )
	ttsheet1 = Tabletop.init( { key: public_spreadsheet_url,
					 callback: showInfo2,
					 wanted: ["Sheet2"],
					  simpleSheet: true } )
}

// process Sheet1 data
function showInfo1(data, tabletop) {
	sheetonemaxr = 0;
	myData = data;
	for (i = 0; i < myData.length; i++)
	{
		x = myData[i];
		console.log(x);

		var d = [];

		sheetonemaxc = 0;
		for (q in x) {
			fill(255,0,0);
			d[sheetonemaxc] = x[q];

			console.log(sheetonemaxc);
			console.log(x[q]);
			sheetonemaxc++;
		}
		sheetonedata[i] = d;      
		sheetonemaxr++;
	}
}

// process Sheet2 data
function showInfo2(data, tabletop) {
	sheettwomaxr = 0;
	myData = data;
	for (i = 0; i < myData.length; i++)
	{
		x = myData[i];
		console.log(x);

		var d = [];
		sheettwomaxc = 0;
		
		for (q in x) {
			fill(255,0,0);
			d[sheettwomaxc] = x[q];

			console.log(sheettwomaxc);
			console.log(x[q]);
			sheettwomaxc++;
		}
		sheettwodata[i] = d;      
		sheettwomaxr++;
	}
}
  