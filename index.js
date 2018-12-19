class Elevator {
  constructor(currentFloor, bottomFloor, topFloor) {
    this.currentFloor = currentFloor;
    this.bottomFloor = bottomFloor;
    this.topFloor = topFloor;
    let maintenance = 0;

    this.checkFloor = (floor) => {
      if (!Number.isInteger(this.getFloor()) || typeof (this.getFloor()) !== 'number') {
        this.displayMessage('Malfunction');
        return false;
      }
      if (this.getFloor() < this.bottomFloor || this.getFloor() > this.topFloor) {
        this.displayMessage('Malfunction');
        return false;
      }
      if (floor < this.bottomFloor || floor > this.topFloor) {
        this.displayMessage('Does not exist', floor);
        return false;
      }
      if (floor === this.getFloor()) {
        this.displayMessage('Already on floor');
        return false;
      }
      return true;
    };

    this.displayMessage = (message, value) => {
      switch (message) {
        case 'Malfunction':
          console.error('Malfunction: elevator configuration error');
          break;
        case 'Does not exist':
          console.error(`Floor ${value} does not exist`);
          break;
        case 'Already on floor':
          console.error(`You are already on floor ${this.getFloor()}, please select another floor`);
          break;
        case 'Maintenance':
          console.error('Attention: elevator is due for maintenance!');
          break;
        case 'Going to':
          console.log(`Going to floor ${value}`);
          break;
        case 'Arrived at':
          console.log(`Arrived on floor ${this.getFloor()}`);
          break;
        case 'Current floor':
          console.log(`${this.currentFloor}`);
          break;
        default:
          break;
      }
    };

    this.getMaintenance = () => {
      maintenance += 1;
      if (maintenance % 10 === 0) {
        this.displayMessage('Maintenance');
      }
      return null;
    };

    this.getFloor = () => this.currentFloor;

    this.goUp = () => {
      this.currentFloor += 1;
      return this.currentFloor;
    };

    this.goDown = () => {
      this.currentFloor -= 1;
      return this.currentFloor;
    };
  }

  goToFloor(floor) {
    if (!this.checkFloor(floor)) {
      return null;
    }
    if (this.getFloor() < floor) {
      this.displayMessage('Going to', floor);
      const ascend = setInterval(() => {
        if (this.getFloor() < floor) {
          this.goUp();
          this.displayMessage('Current floor');
          return null;
        }
        this.displayMessage('Arrived at');
        this.getMaintenance();
        return clearInterval(ascend);
      }, 1000);
      return null;
    }
    this.displayMessage('Going to', floor);
    const descend = setInterval(() => {
      if (this.getFloor() > floor) {
        this.goDown();
        this.displayMessage('Current floor');
        return null;
      }
      this.displayMessage('Arrived at');
      this.getMaintenance();
      return clearInterval(descend);
    }, 1000);
    return null;
  }
}

const elevator1 = new Elevator(0, -2, 4);
const elevator2 = new Elevator(2, 0, 2);
const elevator3 = new Elevator('tacos', -4, 6);
const elevator4 = new Elevator(-10, 0, 3);
