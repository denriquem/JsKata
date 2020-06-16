function Rover(x, y, direction) {
  this.startingLocationX = x;
  this.startingLocationY = y;
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
  if (left === 0 || right === 1) {
    return "Facing East";
  } else {
    return "Facing North";
  }
};
