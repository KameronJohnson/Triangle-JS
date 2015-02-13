var triangleType = function( side1, side2, side3 ) {

  if (( side1 + side2 <= side3) || ( side1 + side3 <= side2 ) || ( side2 + side3 <= side1 )) {
    return true;
  } else {
    return false;
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
