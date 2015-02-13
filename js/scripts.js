var triangleType = function( side1, side2, side3 ) {

  if (( side1 + side2 <= side3) || ( side1 + side3 <= side2 ) || ( side2 + side3 <= side1 )) {
    return("Not a triangle");
  }
    else if ( side1 === side2 && side2 === side3 ) {
      return("Equilateral");
    }
    else if ( side1 !== side2 && side2 !== side3 && side3 !== side1 ) {
      return("Scalene");
    }
    else if (( side1 === side2 && side2 !== side3) || (side2 === side3 && side3 !== side1) || (side1 === side3 && side3 !== side2)) {
      return("Isosceles");
    }
};




















$(document).ready(function() {
  $("form#name_of_form").submit(function(event) {

      var input1 = $("input#user_input").val();
      var result = functionName(input1);

      $(".user_input").text(input1);
      $(".result_span").text(result);

      $("#results").show();
      event.preventDefault();
  });

});
