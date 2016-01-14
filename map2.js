var img;
function preload() {
  img = loadImage("images/fourcolor.png");
}
function setup() {
  createCanvas(1000,500);
//  image(img, 0, 0);
//  img.loadPixels();
  i = 0
}
function draw()
{
  background(0,0,0);
  image(img, 0, 0);
  loadPixels();
  fill(255,0,0);

  row = 2;
  x = 0;
  y = 0;

/*
  image(img, 0, 0);
  c = get(10,0);
  fill(255,0,0);
  rect(200,10,20,20);
  */
//  text(get(10,0),200,10);
//  text(pixelDensity(),200,10);



  
//  for (i = 25000; i < 25020; i++)
  for (i = row*580; i < row*630; i++)
  {
//    if (pixels[i] != 255 && pixels[i] != 0)
//    {
		text(i,x+200,(y+1)*25);
		text(pixels[i],x+75+200,(y+1)*25);
		y++;   
		if (y == 12)
		{
			y = 0;
			x = x + 150;
		}

//    }

  }
  

}