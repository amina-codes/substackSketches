let frameToggle = false;
let lastSwitchTime = 0;
let switchInterval = 1000; // milliseconds

function setup() {
  createCanvas(800, 300);
  frameRate(30);
  noSmooth(); // pixel crispness
}

function draw() {
  background('#a0d8ef'); // Sky blue

  if (millis() - lastSwitchTime > switchInterval) {
    frameToggle = !frameToggle;
    lastSwitchTime = millis();
  }

  let pixelSize = 6;

  push();
  scale(pixelSize);

  // Book stack on the left third (even spacing)
  drawBookStack(20, 20);

  // Main book in center
  if (frameToggle) {
    drawOpenBook(82, 14);
  } else {
    drawFlippingBook(82, 14);
  }

  pop();
}

// ========== Book Drawing Functions ==========

function drawOpenBook(x, y) {
  fill(255);
  rect(x, y, 10, 14);
  rect(x + 10, y, 10, 14);
  fill('#0a2540');
  rect(x + 9, y, 2, 14);
  stroke('#0a2540');
  noFill();
  rect(x, y, 20, 14);
  noStroke();
}

function drawFlippingBook(x, y) {
  fill(255);
  rect(x, y, 10, 14);
  fill(255);
  quad(x + 10, y, x + 18, y, x + 12, y + 14, x + 10, y + 14);
  fill('#0a2540');
  rect(x + 9, y, 2, 14);
  stroke('#0a2540');
  noFill();
  rect(x, y, 20, 14);
  noStroke();
}

function drawBookStack(x, y) {
  fill('#355c7d'); // Bottom
  rect(x, y + 20, 20, 4);

  fill('#6c5b7b'); // Middle
  rect(x + 2, y + 16, 20, 4);

  fill('#88d8b0'); // Top
  rect(x + 4, y + 12, 20, 4);

  stroke('#0a2540');
  noFill();
  rect(x, y + 20, 20, 4);
  rect(x + 2, y + 16, 20, 4);
  rect(x + 4, y + 12, 20, 4);
  noStroke();
}
