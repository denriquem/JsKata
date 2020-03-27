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

  //   it('should return c: 1 when passed c', functi)
});
