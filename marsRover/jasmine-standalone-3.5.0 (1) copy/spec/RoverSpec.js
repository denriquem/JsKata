describe("Rover", () => {
  let rover;

  beforeEach(() => {
    rover = new Rover(1, 1, "N");
  });

  it("should return current location as 2,1, when told to move one coordinate and starting from coordinate 1,1 and facing north", () => {
    expect(rover.move(1, 0)).toEqual("current location: (2,1)");
  });
});
