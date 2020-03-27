describe("StrCount", function() {
  var strCount;

  beforeEach(function() {
    strCount = new StrCount();
  });

  it("should return a: 1 when passed a", function() {
    expect(strCount.do("a")).toEqual({ a: 1 });
  });

  it("should return b: 1 when passed b", function() {
    expect(strCount.do("b")).toEqual({ b: 1 });
  });

  it("should return c: 1 when passed c", function() {
    expect(strCount.do("c")).toEqual({ c: 1 });
  });

  it("should return a: 1 b: 1 when passed ab", function() {
    expect(strCount.do("ab")).toEqual({ a: 1, b: 1 });
  });

  it("should return a: 2, b: 1, c: 1 passed abac, function", function() {
    expect(strCount.do("abac")).toEqual({ a: 2, b: 1, c: 1 });
  });

  it("should return and empty object when passed an empty string", function() {
    expect(strCount.do(" ")).toEqual({});
  });
});
