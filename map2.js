var r = [];
var g = [];
var b = [];
var a = [];

function preload() {
  img = loadImage("images/fourcolor.png");
}

function setup() {
  createCanvas(150,150);
  image(img, 0, 0);
  loadPixels();


  row = 1;
//  row = 153;
  d = pixelDensity();
  startingPixel = row*150*d-10;
  startingPixelArray = startingPixel*4;


  for (i = 0, j = 0; j < 300*300; i=i+4, j++)
  {
    r[j] = pixels[i];
    g[j] = pixels[i+1];
    b[j] = pixels[i+2];
    a[j] = pixels[i+3];
  }

/*
  for (i = startingPixelArray, j = startingPixel; j < startingPixel+20; i=i+4, j++)
  {
	print(j+": "+pixels[i]+"  "+pixels[i+1]+"  "+pixels[i+2]+"  "+pixels[i+3]+"  ");
  }
  */
  
  createCanvas(300,150);
}
function draw()
{
  image(img, 0, 0);
  q = (mouseX+mouseY*300)*2;
  if (mouseX > 150 || mouseY > 150)
  {
  	fill(0,0,0);
  }
  else
  {
  	fill(r[q],g[q],b[q],a[q]);
  }
  rect(200,10,50,50);
}