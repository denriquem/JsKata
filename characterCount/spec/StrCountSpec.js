describe("StrCount", function() {
  var strCount;

  beforeEach(function() {
    strCount = new StrCount();
  });

  it("should return a: 1 when passed a", function() {
    expect(strCount.do("a")).toEqual({ a: 1 });
  });
});
