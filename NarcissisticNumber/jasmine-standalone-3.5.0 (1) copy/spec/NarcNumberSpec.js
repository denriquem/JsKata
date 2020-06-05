describe("NarcNumber", () => {
  let narcNumber;

  beforeEach(() => {
    narcNumber = new NarcNumber();
  });

  it("should return true when passed 1", () => {
    expect(narcNumber.isInlove()).toEqual(true);
  });
});
