describe("Order", function() {
  beforeEach(function() {
    order = new Order();
  });

  it("should return a word when passed a word", function() {
    expect(order.sort("The")).toEqual("The");
  });
});
