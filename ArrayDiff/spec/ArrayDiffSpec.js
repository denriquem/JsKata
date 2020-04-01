describe("ArrayDiff", function() {
  var diff;

  beforeEach(function() {
    diff = new ArrayDiff();
  });

  it("should return an empty array when passed a first array of 1 with a second argument of 1", function() {
    expect(diff.do([1], [1])).toEqual([]);
  });
});
