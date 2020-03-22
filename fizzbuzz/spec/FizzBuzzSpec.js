describe("FizzBuzz", function() {
  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new FizzBuzz();
  });

  it("should return the numbers 1 when passed 1", function() {
    expect(fizzbuzz.bing(1)).toEqual(1);
  });

  it("should return the number 1, 2, 3, 4, 5 when passed an array containing those numbers", function() {
    expect(fizzbuzz.bing("1, 2, 3, 4, 5")).toEqual("1, 2, 3, 4, 5");
  });
});
