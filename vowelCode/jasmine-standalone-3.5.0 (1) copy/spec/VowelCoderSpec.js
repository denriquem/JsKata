describe("VowelCoder", () => {
  let vowelCoder;

  beforeEach(() => {
    vowelCoder = new VowelCoder();
  });

  it("should return h when passed h", () => {
    expect(vowelCoder.encode("h")).toEqual("h");
  });

  it("should return 1 when passed a", () => {
    expect(vowelCoder.encode("a")).toEqual(1);
  });

  it("should return h1 when passed ha", () => {
    expect(vowelCoder.encode("ha")).toEqual("h1");
  });
});
