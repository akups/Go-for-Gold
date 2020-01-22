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
  game.background.sound.play();
}

function draw() {
  clear();
  //background("white");
  //For (var BEGIN; END; INTERVAL){
  //DO SOMETHING }
  if (game.gameEnds() === true) {
    return game.drawEndScreen();
  }

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
  game.timer++;

  game.player.draw();

  textSize(32); // size
  fill("black"); //color ${}
  text(`Miner: ${game.score.toFixed(2)}`, width - width / 1.1, 30); //
  // console.log(game.points);
  //player.checkCollision();
} // Increase by 1 the value of player.row
