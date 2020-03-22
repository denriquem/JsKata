describe("FizzBuzz", function() {
  var fizbuzz;

  beforeEach(function() {
    fizzbuzz = new FizzBuzz();
  });

  it("should return the numbers 1 to 100", function() {
    var OneToOneHundred = [];
    for (var i = 0; i <= 100; i++) {
      OneToOneHundred.push(i);
    }
    expect(fizzbuzz.do()).toEqual(OneToOneHundred);
  });
});
