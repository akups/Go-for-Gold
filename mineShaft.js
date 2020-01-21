class Mineshaft {
  constructor() {
    this.col = 0;
    this.row = 150;
  }
  loadAssets() {
    this.mineShaftImage = loadImage("images/mineshaft.png");
  }

  randomPosition() {
    this.col = Math.floor(Math.random() * 6) * 100;
    this.row = Math.floor(Math.random() * 6) * 150;
    return {
      col: this.col,
      row: this.row
    };
  }

  drawMineshaft() {
    image(this.mineShaftImage, this.row, this.col, 30, 20);
  }
}
