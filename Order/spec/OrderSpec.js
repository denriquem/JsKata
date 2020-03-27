describe("Order", function() {
  beforeEach(function() {
    order = new Order();
  });

  it("should return a word when passed a word", function() {
    expect(order.sort("The")).toEqual("The");
  });

  it("should return two string in the correct order when passed disordered words", function() {
    expect(order.sort("go2 Don't1")).toEqual("Don't1 go2");
  });

  it("should return correctly ordered three strings when passed three disordered words", function() {
    expect(order.sort("don't2 leave3 Please1")).toEqual(
      "Please1 don't2 leave3"
    );
  });

  it("should correctly order any 4 word string", function() {
    expect(order.sort("would2 Why1 leave4 I3")).toEqual(
      "Why1 would2 I3 leave4"
    );
  });
});
