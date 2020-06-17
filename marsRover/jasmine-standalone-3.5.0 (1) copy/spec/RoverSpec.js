describe("Rover", () => {
  let rover;

  beforeEach(() => {
    rover = new Rover(1, 1, "North");
  });

  describe("#move", () => {
    it("should return current location as 2,1, when told to move one coordinate and starting from coordinate 1,1 and facing north", () => {
      expect(rover.move(1, 0)).toEqual("current location: (2,1)");
    });

    it("should return current location after two moves", () => {
      rover.move(1, 0);
      expect(rover.move(0, 3)).toEqual("current location: (-1, 1)");
    });

    it("should return current location after any three moves", () => {
      rover.move(1, 0);
      rover.move(0, 3);
      expect(rover.move(4, 2)).toEqual("current location: (1, 1)");
    });

    it("should move positively along y axis when facing east", () => {
      rover.turn(0, 1);
      expect(rover.move(1, 0)).toEqual("current location: (1, 2)");
    });
  });

  describe("#turn", () => {
    it("should face east after being told to move one move to the right", () => {
      expect(rover.turn(0, 1)).toEqual("Facing East");
    });

    it("should face north after turning right and then turning left", () => {
      rover.turn(0, 1);
      expect(rover.turn(1, 0)).toEqual("Facing North");
    });

    it("should face the correct direction after any turn", () => {
      expect(rover.turn(0, 3)).toEqual("Facing West");
    });

    it("should face the correct direction after three turns", () => {
      rover.turn(0, 1);
      rover.turn(0, 2);
      expect(rover.turn(0, 3)).toEqual("Facing South");
    });
  });

  describe("#detect", () => {
    it("should return the rovers current location and the direction it is facing", () => {
      rover.move(1, 0);
      rover.turn(0, 1);
      expect(rover.detect()).toEqual("current location: (2,1), facing East");
    });
  });
});
