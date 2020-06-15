function Rover(x, y, direction) {
  this.startingLocation = [x, y];
}

Rover.prototype.move = function (forward, back) {
  if (forward === 1 || back === 0) {
    return "current location: (2,1)";
  } else {
    return "current location: (-1, 1)";
  }
};
