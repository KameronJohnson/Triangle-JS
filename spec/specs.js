describe("triangleType", function() {
  it("confirms if the user input forms a triangle", function() {
    expect(triangleType(2, 2, 8)).to.equal("Not a triangle");
  });

  it("tells the user if they have an equilateral triangle", function() {
    expect(triangleType(3, 3, 3)).to.equal("Equilateral");
  });

  it("tells the user if they have a Scalene triangle", function() {
    expect(triangleType(3, 4, 5)).to.equal("Scalene");
  });

  it("tells the user if they have an Isosceles triangle", function() {
    expect(triangleType(5, 5, 4)).to.equal("Isosceles");
  });
});
