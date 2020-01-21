let counter = 0;

class Player {
  constructor() {
    this.col = 0;
    this.row = 0;
    this.currentDirection = "right";
  }
  loadAssets() {
    this.playerImages = {
      down: loadImage("images/miner-down.png"),
      up: loadImage("images/miner-up.png"),
      right: loadImage("images/miner-right.png"),
      left: loadImage("images/miner-left.png")
    };
  }

  draw() {
    if (this.currentDirection === "right") {
      image(this.playerImages.right, this.row, this.col, 75, 50);
    } else if (this.currentDirection === "down") {
      image(this.playerImages.down, this.row, this.col, 75, 50);
    } else if (this.currentDirection === "left") {
      image(this.playerImages.left, this.row, this.col, 75, 50);
    } else if (this.currentDirection === "up") {
      image(this.playerImages.up, this.row, this.col, 75, 50);
    }
  }

  moveDown(stepVert) {
    if (this.col >= 500) {
      this.col = 500;
    } else {
      this.col += stepVert;
    }
    this.currentDirection = "down";
  } // Increase by 1 the value of player.row

  moveUp(stepVert) {
    if (this.col <= 0) {
      this.col = 0;
    } else {
      this.col -= stepVert;
    }
    this.currentDirection = "up";
  }
  // Increase by 1 the value of player.row

  moveRight(stepHor) {
    if (this.row >= 750) {
      this.row = 750;
    } else {
      this.row += stepHor;
    }
    this.currentDirection = "right";
  } // Increase by 1 the value of player.row

  moveLeft(stepHor) {
    if (this.row <= 0) {
      this.row = 0;
    } else {
      this.row -= stepHor;
    }
    this.currentDirection = "left";
  } // Increase by 1 the value of player.row

  dig() {
    for (let i = 0; i < game.treasure.length; i += 1) {
      if (
        this.row === game.treasure[i].row &&
        this.col === game.treasure[i].col
      ) {
        console.log("found gold");
        game.points += 50;
        counter += 50;
        //play.goldSound();
        return;
      }
    }
    for (let i = 0; i < game.dirt.length; i += 1) {
      if (this.row === game.dirt[i].row && this.col === game.dirt[i].col) {
        console.log("found dirt");
        game.points -= 10;
        counter -= 10;
        // play.dirtSound();
        return;
      }
    }

    for (let i = 0; i < game.mineShaft.length; i += 1) {
      if (
        this.row === game.mineShaft[i].row &&
        this.col === game.mineShaft[i].col
      ) {
        console.log("falls in shaft");
        game.points = 0;
        counter = 0;
        console.log(`Game OVER YOU LOSS`);
        //play.loseSound();
        return;
      }
    }

    console.log(`Try Again`);
  }
}
