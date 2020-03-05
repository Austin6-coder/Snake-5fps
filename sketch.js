let snake;
let rez = 20;
let food;
let w;
let h;

function setup() {
  createCanvas(400, 400);
  w = floor(width / rez);
  h = floor(height / rez);
  frameRate(5);
  snake = new Snake();
  foodLocation();
}

function foodLocation() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);

}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snake.xdir = -1;
    snake.ydir = 0;
  } else if (keyCode === RIGHT_ARROW) {
    snake.xdir = 1;
    snake.ydir = 0;
  } else if (keyCode === DOWN_ARROW) {
    snake.xdir = 0;
    snake.ydir = 1;
  } else if (keyCode === UP_ARROW) {
    snake.xdir = 0;
    snake.ydir = -1;
  } else if (key == ' ') {
    var head = snake.body[snake.body.length-1].copy();
    snake.len++;
    snake.body.push(head);
  }

}

function draw() {
  scale(rez);
  background(220);
  if (snake.eat(food)) {
    foodLocation();
  }
  var head = snake.body[snake.body.length-1].copy();
  snake.body.shift();
  head.x += snake.xdir;
  head.y += snake.ydir;
  snake.body.push(head);
  for(let i = 0; i < snake.body.length; i++) {
    fill(0);
    noStroke();
    rect(snake.body[i].x, snake.body[i].y, 1, 1)
  }


  if (snake.endGame()) {
    print("END GAME");
    background(255, 0, 0);
    noLoop();
  }

  noStroke();
  fill(255, 0, 0);
  rect(food.x, food.y, 1, 1);
}