
function setup() {
  createCanvas(600, 600);

  background(200);
}

function draw() {


  //map the red value to mouseX position
  let r = map(mouseX, 0, width, 0, 255);

  // map the blue value to mouse Y position
  let b = map(mouseY, 0, height, 0, 255);

  //fill the colour with the variables
  fill(r, 0, b);
  circle(width/2, height/2, 100);
 
  
}

