let x=190, y=50

function setup() {
  createCanvas(488, 488);
}

function draw() {
  background(220, 220, 0);
  fill ('black')
  
  stroke('white')
  rect(0,0,488,488)
  
// Room 4
  stroke ('white')
  line(240,92,396,92) //
  line(240, 92, 240, 202) //
  line(396, 92, 396, 202) // 
  line(396, 202, 336, 202 ) //
  
  //Room 1
  line(240,294,488,294) //
  line(240, 386, 240, 488)//
  
  //Room 2
  line(144 ,294 ,0, 294 )
  line(144, 294 ,144, 416)
  
  //Room 3
  line (144,202,144,0)
  line (144,202 ,86,202 )
  
  //Home
  fill(0,0,200)
  translate(x, y);
  rotate(PI/2.73);
  polygon(0,0,20,8)
  y=y+1;
  
  
}

function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
