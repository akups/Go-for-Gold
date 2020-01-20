class Background {
  constructor() {
    this.row = 0;
    this.col = 0;
  }

  loadAssets() {
    this.image = loadImage("images/mining-excavation.jpg");
  }
  drawBackground() {
    image(this.image, this.row, this.col, 900, 600);
  }
}
