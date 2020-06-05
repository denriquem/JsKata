describe("NarcNumber", () => {
  let narcNumber;

  beforeEach(() => {
    narcNumber = new NarcNumber();
  });

  it("should return true when passed 1", () => {
    expect(narcNumber.isInlove(1)).toEqual(true);
  });

  it("should return false when passed 10", () => {
    expect(narcNumber.isInlove(10)).toEqual(false);
  });

  it("should return true when passed 154", () => {
    expect(narcNumber.isInlove(154)).toEqual(true);
  });

  it("should return false when passed 155", () => {
    expect(narcNumber.isInlove(155)).toEqual(false);
  });

  it("should calculate that a single digit narcNumber is a narc", () => {
    expect(narcNumber.isInlove(2)).toEqual(true);
  });

  it("should calculate that a three digit number is a narc number", () => {
    expect(narcNumber.isInlove(370)).toEqual(true);
  });

  it("should calculate that three digit number is not a narc number", () => {
    expect(narcNumber.isInlove(169)).toEqual(false);
  });

  it("should cacluate that four digit number is not a narc number", () => {
    expect(narcNumber.isInlove(1635)).toEqual(false);
  });
});
