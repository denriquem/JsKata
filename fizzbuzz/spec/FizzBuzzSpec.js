describe("FizzBuzz", function() {
  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new FizzBuzz();
  });

  it("should return the numbers 1 when passed 1", function() {
    expect(fizzbuzz.bing(1)).toEqual(1);
  });

  it("should return 1, 2, fizz, 4, 5 when passed and array of numbers up to 5", function() {
    var fizzer = ["1", "2", "fizz", "4", "5"];
    expect(fizzbuzz.bing("1, 2, 3, 4, 5")).toEqual(fizzer);
  });

  it("should return numbers with all multiples of three converted to fizz", function() {
    expect(fizzbuzz.bing("1, 2, 3, 4, 5, 6")).toEqual([
      "1",
      "2",
      "fizz",
      "4",
      "5",
      "fizz"
    ]);
  });

  it("should return numbers with all multiples of five converted to buzz", function() {
    expect(fizzbuzz.bing("1, 2, 3, 4, 5, 6, 7")).toEqual([
      "1",
      "2",
      "fizz",
      "4",
      "buzz",
      "fizz",
      "7"
    ]);
  });

  it("should return FizzBuzz for multiples of both 3 and 5", function() {
    expect(
      fizzbuzz.bing("1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15")
    ).toEqual([
      "1",
      "2",
      "fizz",
      "4",
      "buzz",
      "fizz",
      "7",
      "8",
      "fizz",
      "buzz",
      "11",
      "fizz",
      "13",
      "14",
      "fizzbuzz"
    ]);
  });
});
