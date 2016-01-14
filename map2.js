function preload() {
  img = loadImage("images/fourcolor.png");
}
function setup() {
  createCanvas(150,150);
  image(img, 0, 0);
  loadPixels();



  d = pixelDensity();
  row = 1;
  for (i = 0, j = 0; j < 150*d+20; i=i+4, j++)
  {
	print(j+": "+pixels[i]+"  "+pixels[i+1]+"  "+pixels[i+2]+"  "+pixels[i+3]+"  ");
  }
  
}
function draw()
{

}