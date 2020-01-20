class Dirt {
  constructor() {
    this.col = 150;
    this.row = 0;
  }
  loadAssets() {
    this.dirtImage = loadImage("images/dirt.png");
  }

  randomPosition() {
    this.col = Math.floor(Math.random() * 6) * 100;
    this.row = Math.floor(Math.random() * 6) * 150;
  }

  drawDirt() {
    image(this.dirtImage, this.row, this.col, 75, 50);
  }
}
