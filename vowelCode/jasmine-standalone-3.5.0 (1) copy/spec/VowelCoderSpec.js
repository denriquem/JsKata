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

  it("should return h2ll when passed hell", () => {
    expect(vowelCoder.encode("hell")).toEqual("h2ll");
  });

  it("should return h2ll4 when passed hello", () => {
    expect(vowelCoder.encode("hello")).toEqual("h2ll4");
  });

  it("should replace any vowel with their corresponding number", () => {
    expect(vowelCoder.encode("you are")).toEqual("y45 1r2");
  });
});
