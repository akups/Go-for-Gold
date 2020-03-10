const SQUARE_SIDE = 100;
const WIDTH = SQUARE_SIDE * 6;
const HEIGHT = WIDTH * 1.5;

const game = new Game();

function preload() {
  console.log("preload");
  game.addTreasure();
  game.addDirt();
  game.addMineShaft();
  game.treasure.forEach(ele => {
    console.log("ele", ele);
    ele.loadAssets();
  });
  game.player.loadAssets();
  game.mineShaft.forEach(ele => {
    ele.loadAssets();
  });
  game.dirt.forEach(ele => {
    ele.loadAssets();
  });
  game.background.loadAssets();
  game.image = loadImage("images/game-over.jpg");
  game.image1 = loadImage("images/go_for_gold.jpg");
}

function keyPressed() {
  console.log("key pressed", keyCode);
  if (keyCode === 32) {
    game.player.dig();
  }
  const stepVert = 100;
  const stepHor = 150;

  if (keyCode === 37) {
    // left arrow
    game.player.moveLeft(stepHor);
  } else if (keyCode === 39) {
    // right arrow
    game.player.moveRight(stepHor);
  } else if (keyCode === 38) {
    game.player.moveUp(stepVert);
  } else if (keyCode === 40) {
    game.player.moveDown(stepVert);
  }
}

function setup() {
  let canvas = createCanvas(HEIGHT, WIDTH);
  canvas.parent("canvas");
  restartButton = createButton("Restart");
  restartButton.hide();
  restartButton.mousePressed(reloadPage);
  startButton = createButton("Start");
  startButton.hide();
  startButton.mousePressed(startGame);
  // instructionsButton.createButton(
  //   "Instructions: use arrows to move up down right and left and use space to dig"
  // );
  // instructionsButton.hide();
}

function draw() {
  clear();
  //background("white");
  //For (var BEGIN; END; INTERVAL){
  //DO SOMETHING }
  if (game.gameEnds() === true) {
    return game.drawEndScreen();
  }

  if (game.gameStart === false) {
    game.drawBeginScreen();
    //draw the start screen
    //(the start screen will need to have a button, that when clicked sets gamestart to true)
    return;
  }

  if (!game.background.sound.isPlaying()) game.background.sound.loop();

  game.drawGrid();

  game.treasure.forEach(ele => {
    ele.drawTreasure();
  });
  game.mineShaft.forEach(ele => {
    ele.drawMineshaft();
  });
  game.dirt.forEach(ele => {
    ele.drawDirt();
  });
  if (frameCount > 240) {
    game.background.drawBackground();
  }

  if (frameCount % 60 === 0) {
    game.timer++;
  }

  game.player.draw();

  textSize(32); // size
  fill("gold"); //color ${}
  text(`Score: ${game.score}`, 400, 50); //

  textSize(32); // size
  fill("gold"); //color ${}
  text(`Timer: ${game.timer}`, 0, 600); //
}

function reloadPage() {
  document.location.reload();
}

function startGame() {
  frameCount = 0;
  game.gameStart = true;
  startButton.hide();
  // instructionsButton.hide();
}
