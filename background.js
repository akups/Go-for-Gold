class Background {
  constructor() {
    this.row = 0;
    this.col = 0;
  }

  loadAssets() {
    this.image = loadImage("images/mining-excavation.jpg");
    this.sound = loadSound("sounds/Music-01.mp3");
  }

  drawBackground() {
    image(this.image, this.row, this.col, 900, 600);
  }
}
