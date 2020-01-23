// #1 property called isGameEnded ==> false/true
// #2 Set isGameEnded = true ==> when falling into mineshaft? when time runs out?
// #3 create function called drawFinishScreen()

class Game {
  constructor() {
    this.player = new Player(0, 0); // (0,0) = Initial position (col, row)
    this.treasure = [];
    this.mineShaft = [];
    this.dirt = [];
    this.occuppiedPositions = [];
    this.background = new Background();
    this.score = 0;
    this.gameEnded = false;
    this.timer = 0;
  }

  addTreasure() {
    for (let i = 0; i < 10; i += 1) {
      this.treasure.push(new Treasure());
    }

    this.treasure.forEach(ele => {
      let randomPositions = ele.randomPosition();

      while (
        this.occuppiedPositions.find(ele => {
          ele.row === randomPositions.row && ele.col === randomPositions.col;
        })
      ) {
        randomPositions = ele.randomPosition();
      }
      this.occuppiedPositions.push(randomPositions);
    });
  }

  addDirt() {
    for (let i = 0; i < 7; i += 1) {
      this.dirt.push(new Dirt());
    }
    this.dirt.forEach(ele => {
      let randomPositions = ele.randomPosition();

      while (
        this.occuppiedPositions.find(ele => {
          if (
            ele.row === randomPositions.row &&
            ele.col === randomPositions.col
          ) {
            return true;
          }
        })
      ) {
        randomPositions = ele.randomPosition();
      }
      this.occuppiedPositions.push(randomPositions);
    });
  }

  addMineShaft() {
    for (let i = 0; i < 3; i += 1) {
      this.mineShaft.push(new Mineshaft());
    }
    this.mineShaft.forEach(ele => {
      let randomPositions = ele.randomPosition();

      while (
        this.occuppiedPositions.find(ele => {
          if (
            ele.row === randomPositions.row &&
            ele.col === randomPositions.col
          ) {
            return true;
          }
        })
      ) {
        randomPositions = ele.randomPosition();
      }
      this.occuppiedPositions.push(randomPositions);
    });
  }

  drawGrid() {
    // Draw the grid
    for (var x = 0; x <= width; x += width / 6) {
      for (var y = 0; y <= height; y += height / 6) {
        stroke("grey");
        strokeWeight(1);
        line(x, 0, x, height);
        line(0, y, width, y);
      }
    }
  }
  gameEnds() {
    if (this.gameEnded === true || this.timer == 45 * 60) {
      return true;
    }
  }

  drawEndScreen() {
    this.row = 0;
    this.col = 0;
    image(this.image, this.row, this.col, 900, 600);
    textSize(32); // size
    fill("gold"); //color ${}
    text(`Score: ${game.score}`, 400, 50);
  }
}
