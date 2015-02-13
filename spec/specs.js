describe("triangleType", function() {
  it("confirms if the user input forms a triangle", function() {
    expect(triangleType([2, 2, 8])).to.eql(false);
  });

  it("tells the user what type of triangle they have", function() {
    expect(triangleType([3, 3, 3])).to.eql("Equilateral");
  });
});
