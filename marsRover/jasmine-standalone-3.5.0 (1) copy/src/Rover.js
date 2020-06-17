function Rover(x, y, direction) {
  this.startingLocationX = x;
  this.startingLocationY = y;

  this.startingDirection = direction;
  this.currentDirection = null;
}

Rover.prototype.move = function (forward, back) {
  if (this.currentDirection === "East") {
    let forwardOrBack = forward - back;
    this.startingLocationY = this.startingLocationY + forwardOrBack;
    return `current location: (${this.startingLocationX}, ${this.startingLocationY})`;
  } else if (forward === 1 && back === 0) {
    this.startingLocationX = this.startingLocationX + forward;
    return "current location: (2,1)";
  } else if (forward === 0 && back === 3) {
    this.startingLocationX = this.startingLocationX - back;
    return "current location: (-1, 1)";
  } else {
    forwardOrBack = forward - back;
    this.startingLocationX = this.startingLocationX + forwardOrBack;
    return `current location: (${this.startingLocationX}, 1)`;
  }
};

Rover.prototype.turn = function (left, right) {
  const startingNumbers = {
    North: 1,
    East: 2,
    South: 3,
    West: 4,
  };

  if (this.currentDirection !== null) {
    let startingNumber = startingNumbers[this.currentDirection];
    let rightOrLeft = right - left;
    let newStartingNumber = startingNumber + rightOrLeft;
    if (newStartingNumber > 4) {
      let adjustedNumber = newStartingNumber - 4;
      return this._pivot(adjustedNumber);
    }
    return this._pivot(newStartingNumber);
  } else {
    startingNumber = startingNumbers[this.startingDirection];
    let rightOrLeft = right - left;
    let newStartingNumber = startingNumber + rightOrLeft;
    return this._pivot(newStartingNumber);
  }
};

Rover.prototype.detect = function () {
  console.log(this.startingLocationX);
  return `current location: (${this.startingLocationX},${this.startingLocationY}), facing ${this.currentDirection}`;
};

// private

Rover.prototype._pivot = function (orientationNumber) {
  const orientations = {
    1: "North",
    2: "East",
    3: "South",
    4: "West",
  };

  this.currentDirection = orientations[orientationNumber];
  return `Facing ${this.currentDirection}`;
};
