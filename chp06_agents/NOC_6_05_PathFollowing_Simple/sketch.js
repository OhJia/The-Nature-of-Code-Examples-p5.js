// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Path Following
// Path is a just a straight line in this example
// Via Reynolds: // http://www.red3d.com/cwr/steer/PathFollow.html

// Using this variable to decide whether to draw all the stuff
var debug = true;

// A path object (series of connected points)
var path;

// Two vehicles
var car1;
var car2;
var cars;

function setup() {
  //var text = createP("Hit space bar to toggle debugging lines.");
  //text.position(10,365);

  createCanvas(640, 360);
  path = new Path();

  cars = [];
  // Each vehicle has different maxspeed and maxforce for demo purposes
  for ( var i = 0; i < 100; i++) {
    var car = new Vehicle(0, height/2, 2, 0.02 * i);
    cars.push(car);
  }
  // car1 = new Vehicle(0, height/2, 2, 0.02);
  // car2 = new Vehicle(0, height/2, 3, 0.05);
}

function draw() {
  background(51);
  // Display the path
  path.display();

  for ( var i = 0; i < cars.length; i++) {
    cars[i].follow(path);
    cars[i].run();
    cars[i].borders(path);
  }
  // The boids follow the path
  // car1.follow(path);
  // car2.follow(path);
  // // Call the generic run method (update, borders, display, etc.)
  // car1.run();
  // car2.run();
  
  // // Check if it gets to the end of the path since it's not a loop
  // car1.borders(path);
  // car2.borders(path);
  }

function keyPressed() {
  if (key == ' ') {
    debug = !debug;
  }
}


