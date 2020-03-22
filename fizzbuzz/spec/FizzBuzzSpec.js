describe("FizzBuzz", function() {
  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new FizzBuzz();
  });

  it("should return the numbers 1 when passed 1", function() {
    expect(fizzbuzz.bing(1)).toEqual(1);
  });
});
