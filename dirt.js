class Dirt {
  constructor() {
    this.col = 150;
    this.row = 0;
  }
  loadAssets() {
    this.dirtImage = loadImage("images/dirt.png");
    this.sound = loadSound("sounds/SciFi-02.mp3");
  }

  randomPosition() {
    this.col = Math.floor(Math.random() * 6) * 100;
    this.row = Math.floor(Math.random() * 6) * 150;
    return {
      col: this.col,
      row: this.row
    };
  }

  drawDirt() {
    image(this.dirtImage, this.row, this.col, 75, 50);
  }
}

const randomDirt = new Dirt(
  Math.floor(Math.random() * 6) * 100,
  Math.floor(Math.random() * 6) * 150
);
