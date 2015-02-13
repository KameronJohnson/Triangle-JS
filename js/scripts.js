var triangleType = function( side1, side2, side3 ) {

  if (( side1 + side2 <= side3) || ( side1 + side3 <= side2 ) || ( side2 + side3 <= side1 )) {
    return("Not a triangle");
  }
    else if ( side1 === side2 && side2 === side3 ) {
      return("Equilateral");
    }
    else if ( side1 === side2 || side2 === side3 || side1 === side3 ) {
      return("Isosceles");
    }
    else if ( side1 !== side2 && side2 !== side3 && side3 !== side1 ) {
      return("Scalene");
    }
};

$(document).ready(function() {
  $("form#triangle-form").submit(function(event) {

      var input1 = parseInt($("input#user_input1").val());
      var input2 = parseInt($("input#user_input2").val());
      var input3 = parseInt($("input#user_input3").val());
      var result = triangleType(input1, input2, input3);

      $(".result").text(result);

      event.preventDefault();
  });
});
