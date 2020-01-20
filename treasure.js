class Treasure {
  constructor() {
    this.col = 0;
    this.row = 0;
    this.treasureImage = "";
  }
  loadAssets() {
    this.treasureImage = loadImage("images/treasure_gold.png");
  }

  randomPosition() {
    this.col = Math.floor(Math.random() * 6) * 100;
    this.row = Math.floor(Math.random() * 6) * 150;
  }

  drawTreasure() {
    image(this.treasureImage, this.row, this.col, 150, 100);
  }
}
