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

  checkCurrentFloor() {
    if (this.getFloor() < this.bottomFloor || this.getFloor() > this.topFloor) {
      console.error(`Level ${this.getFloor()} does not exist`);
      return false;
    }
    return true;
  }

  goUp() {
    if (this.checkCurrentFloor()) {
      if (this.canGoUp()) {
        console.log(`On floor ${this.getFloor()}, going up one level`);
        this.currentFloor += 1;
        return;
      }
      console.log(`You are currently on ${this.topFloor}, this is the top floor`);
    }
  }

  goDown() {
    if (this.checkCurrentFloor()) {
      if (this.canGoDown()) {
        console.log(`On floor ${this.getFloor()}, going down one level`);
        this.currentFloor -= 1;
        return;
      }
      console.log(`You are currently on ${this.bottomFloor}, this is the bottom floor`);
    }
  }
}

const elevator1 = new Elevator(0, -2, 4);
const elevator2 = new Elevator(2, 0, 2);
const elevator3 = new Elevator(-2, 0, 3);
