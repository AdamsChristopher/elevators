class Elevator {
  constructor(currentFloor, bottomFloor, topFloor) {
    this.currentFloor = currentFloor;
    this.bottomFloor = bottomFloor;
    this.topFloor = topFloor;
  }

  getFloor() {
    return this.currentFloor;
  }

  canGoUp() {
    return this.currentFloor < this.topFloor;
  }

  canGoDown() {
    return this.currentFloor > this.bottomFloor;
  }

  goUp() {
    if (this.canGoUp()) {
      this.currentFloor += 1;
      console.log(`On ${this.getFloor}, going up one level`);
    } else {
      console.log(`You are currently on ${this.topFloor}, the elevator cannot go higher`);
    }
  }

  goDown() {
    if (this.canGoDown()) {
      this.currentFloor -= 1;
      console.log(`On ${this.currentFloor}, going down one level`);
    } else {
      console.log(`You are currently on ${this.bottomFloor}, the elevator cannot go lower`);
    }
  }
}

const elevator1 = new Elevator(0, -2, 4);
const elevator2 = new Elevator(2, 0, 2);