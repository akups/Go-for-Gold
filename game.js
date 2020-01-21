class Game {
  constructor() {
    this.player = new Player(0, 0); // (0,0) = Initial position (col, row)
    this.treasure = [];
    this.mineShaft = [];
    this.dirt = [];
    this.occuppiedPositions = [];
    this.background = new Background();
    this.points = 0;
  }

  addTreasure() {
    for (let i = 0; i < 10; i += 1) {
      this.treasure.push(new Treasure());
    }

    this.treasure.forEach(ele => {
      let randomPositions = ele.randomPosition();
      while (
        randomPositions ===
        this.occuppiedPositions.filter(ele => {
          return ele.x === randomPositions.x && ele.y === randomPositions.y;
        })
      ) {
        randomPositions = ele.randomPosition();
      }
      this.occuppiedPositions.push(randomPositions);
    });
    console.log(this.occuppiedPositions);
  }

  addDirt() {
    console.log(this.occuppiedPositions);
    for (let i = 0; i < 20; i += 1) {
      this.dirt.push(new Dirt());
    }
    this.dirt.forEach(ele => {
      let randomPositions = ele.randomPosition();
      while (
        randomPositions ===
        this.occuppiedPositions.filter(ele => {
          return ele.x === randomPositions.x && ele.y === randomPositions.y;
        })
      ) {
        randomPositions = ele.randomPosition();
      }
      this.occuppiedPositions.push(randomPositions);
    });
    console.log(this.occuppiedPositions);
  }

  addMineShaft() {
    for (let i = 0; i < 3; i += 1) {
      this.mineShaft.push(new Mineshaft());
    }
    this.mineShaft.forEach(ele => {
      ele.randomPosition();
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
}
