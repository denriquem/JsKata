describe("VowelCoder", () => {
  let vowelCoder;

  beforeEach(() => {
    vowelCoder = new VowelCoder();
  });

  it("should return h when passed h", () => {
    expect(vowelCoder.encode("h")).toEqual("h");
  });
});
