describe("ArrayDiff", function() {
  var diff;

  beforeEach(function() {
    diff = new ArrayDiff();
  });

  it("should return an empty array when passed a first array of 1 with a second argument of 1", function() {
    expect(diff.do([1], [1])).toEqual([]);
  });

  it("should remove 1 from array when passed an array of one and two", function() {
    expect(diff.do([1, 2], [1])).toEqual([1]);
  });

  it("should remove 2 from a three digit array", function() {
    expect(diff.do([1, 2, 3], [2])).toEqual([1, 3]);
  });

  it("should remove 3 from a four digit array", function() {
    expect(diff.do([1, 2, 3, 4], [3])).toEqual([1, 2, 4]);
  });
});
