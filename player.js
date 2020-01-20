class Player {
  constructor() {
    this.col = 0;
    this.row = 0;
    this.playerImages;
    this.currentDirection = "down";
  }

  draw() {
    image(this.playerImages, this.row, this.col, 150, 100);
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
    if (this.row === treasure.row && this.col === treasure.col);
  }
}
