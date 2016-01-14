var img;
var r;
var g;
var b;
var a;
var d;

function preload() {
  img = loadImage("images/worldmap.png");
}

function setup() {
  createCanvas(553,605);
 // image(img, 0, 0);
  
  d = pixelDensity;
  var halfImage = 4 * (img.width * d) * (img.height/2 * d);
  loadPixels();
/*
  for (var i = 0; i < halfImage; i++) {
    pixels[i+halfImage] = pixels[i];
  }
  updatePixels();
  */
  r = 0;
  g = 0;
  b = 0;
  a = 0;
  d = 1;
}

function draw()
{
//  image(img, 0, 0);

//  fill(255,0,0);
//  rect(10,10,50,50);
fill(0,0,0);
//text(d,100,10);



//y = mouseY;
//x = mouseX;
//fill(pixels[(y*width*d+x)*d], pixels[(y*width*d+x)*d+1], pixels[(y*width*d+x)*d+2], pixels[(y*width*d+x)*d+3]);
/*
	x = 4 * ((mouseY * d) * 605 * d + (mouseX * d)); 
	r = pixels[x];
	g = pixels[x+1];
	b = pixels[x+2];
	a = pixels[x+3];
*/
x = get(mouseY,mouseX);
  fill(x);  
  rect(10,10,50,50);

}

/*
function setup() {
  createCanvas(553,605);

//  var d = pixelDensity;
//  var halfImage = 4 * (img.width * d) *
//      (img.height/2 * d);
  loadPixels(img);

/*  for (var i = 0; i < halfImage; i++) {
    pixels[i+halfImage] = pixels[i];
  }
  updatePixels();
}

function draw(){
  image(img, 0, 0);

//  var pix = get(mouseX,mouseY,1,1);
//  var pix = pixels[mouseX][mouseY];

  fill(pix);  
  rect(10,10,50,50);
//  text(pix,10,10);

}
*/