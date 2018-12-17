class Elevator {
  constructor(currentFloor, bottomFloor, topFloor) {
    this.currentFloor = currentFloor;
    this.bottomFloor = bottomFloor;
    this.topFloor = topFloor;
  }

  checkFloor(floor) {
    if (this.getFloor() < this.bottomFloor || this.getFloor() > this.topFloor) {
      console.error('Malfunction: the current floor not exist');
      return false;
    }
    if (floor < this.bottomFloor || floor > this.topFloor) {
      console.error(`Floor ${floor} does not exist`);
      return false;
    }
    if (floor === this.getFloor()) {
      console.error(`You are already on floor ${this.getFloor()}`);
      return false;
    }
    return true;
  }

  getFloor() {
    return this.currentFloor;
  }

  goUp() {
    this.currentFloor += 1;
    return this.currentFloor;
  }

  goDown() {
    this.currentFloor -= 1;
    return this.currentFloor;
  }

  goToFloor(floor) {
    if (!this.checkFloor(floor)) {
      return null;
    }
    if (this.getFloor() < floor) {
      console.log(`Going to floor ${floor}!`);
      while (this.getFloor() < floor) {
        this.goUp();
        console.log(`${this.currentFloor}`);
      }
      console.log(`Arrived on floor ${this.getFloor()}!`);
      return null;
    }
    console.log(`Going to floor ${floor}!`);
    while (this.getFloor() > floor) {
      this.goDown();
      console.log(`${this.currentFloor}`);
    }
    console.log(`Arrived on floor ${this.getFloor()}!`);
    return null;
  }
}

const elevator1 = new Elevator(0, -2, 4);
const elevator2 = new Elevator(2, 0, 2);
const elevator3 = new Elevator(-10, 0, 3);
