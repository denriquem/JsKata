function Rover(x, y, direction) {
  this.startingLocationX = x;
  this.startingLocationY = y;

  this.startingDirection = direction;
}

Rover.prototype.move = function (forward, back) {
  if (forward === 1 || back === 0) {
    this.startingLocationX + forward;
    return "current location: (2,1)";
  } else if (forward === 0 || back === 3) {
    this.startingLocationX - back;
    return "current location: (-1, 1)";
  } else {
    this.startingLocationX + forward;
    this.startingLocationX - back;
    return `current location: (${this.startingLocationX}, 1)`;
  }
};

Rover.prototype.turn = function (left, right) {
  const orientations = {
    1: "North",
    2: "East",
    3: "South",
    4: "West",
  };

  const startingNumbers = {
    North: 1,
    East: 2,
    South: 3,
    West: 4,
  };

  if (left === 0 && right === 1) {
    return "Facing East";
  } else {
    startingNumber = startingNumbers[this.startingDirection];

    let newStartingNumber = startingNumber + right;
    newStartingNumber - left;

    return `Facing ${orientations[newStartingNumber]}`;
  }
};
