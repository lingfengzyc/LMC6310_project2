let img;
let theta = 0;
 
let searchvar= "water" ;
let base_url = 'https://source.unsplash.com/1600x900/?';
let shapes = ['torus', 'plane', 'box'];
let shape;
 
function searchURL(searchterm){
  return base_url + searchterm;
}
 
url = searchURL(searchvar);
 
function setup() {
  var can = createCanvas(450, 450, WEBGL);
  //frameRate(10);
  //img = loadImage('https://source.unsplash.com/1600x900/?water');
  //console.log('load first image');
  can.position(50,110);
  console.log(url);
  img = loadImage(url);
  
}
 
function SearchPhotos(){
  searchvar = select("#search").value();
  console.log(searchvar);
  url = searchURL(searchvar);
  img = loadImage(url);
  console.log(url);
  let shapes = ['torus', 'plane', 'box', 'cylinder', 'cone', 'sphere', 'torus2', 'plane2', 'box2', 'cylinder2', 'cone2', 'sphere2'];
  shape = random(shapes);
  console.log(shape);
  return (shape);
  
 
}
 
function draw() {
  
  background(0);
  noStroke();
  
  translate(0, 0, 0);
    push();
    rotateZ(theta * -0.1);
    rotateX(theta * -0.1);
    rotateY(theta * 0.1);
    texture(img);
    box(150);
    pop();
    theta += 0.09;

  if (shape == 'torus') {
    translate(0, 0, 0);
    push();
    rotateZ(theta * 0.1);
    rotateX(theta * 0.1);
    rotateY(theta * 0.1);
    texture(img);
    torus(200, 175);
    pop();
    theta += 0.09;
  } else if (shape == 'box') {
    translate(100, 0, 0);
    push();
    rotateZ(theta * -0.1);
    rotateX(theta * -0.1);
    rotateY(theta * 0.1);
    texture(img);
    box(800);
    pop();
    theta += 0.09;


  } else if (shape == 'cylinder') {
    translate(100, 0, 0);
    push();
    rotateZ(theta * -0.1);
    rotateX(theta * -0.1);
    rotateY(theta * 0.1);
    texture(img);
    cylinder(800, 400);
    pop();
    theta += 0.09;

  } else if (shape == 'sphere') {
    translate(-50, 0, 0);
    push();
    rotateZ(theta * -0.1);
    rotateX(theta * -0.1);
    rotateY(theta * 0.1);
    texture(img);
    sphere(400);
    pop();
    theta += 0.09;

  } else if (shape == 'cone') {
    translate(-50, 0, 0);
    push();
    rotateZ(theta * -0.1);
    rotateX(theta * -0.1);
    rotateY(theta * 0.1);
    texture(img);
    cone(2000);
    pop();
    theta += 0.09;

  } else if (shape == 'plane'){
   
    translate(0, 0, 0);
    push();
    rotateZ(theta * -0.1);
    rotateX(theta * 0.1);
    rotateY(theta * 0.1);
    texture(img);
    plane(8000);
    pop();
    theta += 0.09;

  } else if (shape == 'torus2') {
      translate(0, 0, 0);
      push();
      rotateZ(theta * 0.1);
      rotateX(theta * 0.1);
      rotateY(theta * 0.1);
      texture(img);
      torus(200, 175);
      pop();
      theta += 0.09;

      translate(0, 0, 0);
      push();
      rotateZ(theta * -0.1);
      rotateX(theta * -0.1);
      rotateY(theta * 0.1);
      texture(img);
      sphere(140);
      pop();
      theta += 0.09;

    } else if (shape == 'cylinder2') {
      translate(100, 0, 0);
      push();
      rotateZ(theta * -0.13);
      rotateX(theta * -0.1);
      rotateY(theta * 0.13);
      texture(img);
      cylinder(80);
      pop();
      theta += 0.09;

      translate(-200, 0, 0);
      push();
      rotateZ(theta * -0.13);
      rotateX(theta * -0.1);
      rotateY(theta * 0.1);
      texture(img);
      cylinder(80);
      pop();
      theta += 0.09;

   } else if (shape == 'box2') {
      translate(50, 0, 0);
      push();
      rotateZ(theta * -0.1);
      rotateX(theta * -0.1);
      rotateY(theta * 0.1);
      texture(img);
      box(200);
      pop();
      theta += 0.09;

      translate(-100, 0, 0);
      push();
      rotateZ(theta * -0.1);
      rotateX(theta * -0.1);
      rotateY(theta * 0.1);
      texture(img);
      box(200);
      pop();
      theta += 0.09;
  
  
    } else if (shape == 'sphere2') {
      translate(100, 0, 0);
      push();
      rotateZ(theta * -0.1);
      rotateX(theta * -0.1);
      rotateY(theta * 0.1);
      texture(img);
      sphere(60);
      pop();
      theta += 0.09;

      translate(-200, 0, 0);
      push();
      rotateZ(theta * -0.1);
      rotateX(theta * -0.1);
      rotateY(theta * 0.1);
      texture(img);
      sphere(60);
      pop();
      theta += 0.09;
  
    } else if (shape == 'cone2') {
      translate(-50, -25, 0);
      push();
      rotateZ(theta * -0.1);
      rotateX(theta * -0.1);
      rotateY(theta * 0.1);
      texture(img);
      cone(100);
      pop();
      theta += 0.09;

      translate(100, 25, 0);
      push();
      rotateZ(theta * -0.1);
      rotateX(theta * -0.1);
      rotateY(theta * 0.1);
      texture(img);
      cone(100);
      pop();
      theta += 0.09;
      
    } else if (shape == 'plane2') {
      translate(100, 0, 0);
      push();
      rotateZ(theta * -0.1);
      rotateX(theta * 0.1);
      rotateY(theta * 0.1);
      texture(img);
      plane(120);
      pop();
      theta += 0.09;
  
      translate(-200, 0, 0);
      push();
      rotateZ(theta * -0.1);
      rotateX(theta * 0.1);
      rotateY(theta * 0.1);
      texture(img);
      plane(120);
      pop();
      theta += 0.09;

      translate(0, 100, 0);
      push();
      rotateZ(theta * -0.1);
      rotateX(theta * 0.1);
      rotateY(theta * 0.1);
      texture(img);
      plane(120);
      pop();
      theta += 0.09;
  
      translate(50, -200, 100);
      push();
      rotateZ(theta * -0.1);
      rotateX(theta * 0.1);
      rotateY(theta * 0.1);
      texture(img);
      plane(120);
      pop();
      theta += 0.09;
  }
}
