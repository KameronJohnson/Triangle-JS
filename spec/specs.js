describe("triangleType", function() {
  it("confirms if the user input forms a triangle", function() {
    expect(triangleType(2, 2, 8)).to.eql("Not a triangle");
  });

  it("tells the user if they have an equilateral triangle", function() {
    expect(triangleType(3, 3, 3)).to.eql("Equilateral");
  });

  it("tells the user if they have a Scalene triangle", function() {
    expect(triangleType(2, 3, 4)).to.eql("Scalene");
  });
  it("tells the user if they have an Isosceles triangle", function() {
    expect(triangleType(2, 2, 3)).to.eql("Isosceles");
  });
});
