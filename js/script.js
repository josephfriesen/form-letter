$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var yourNameInput = $("input#your-name").val();
    var addresseeInput = $("input#addressee").val();
    var streetInput = $("input#street").val();
    var cityInput = $("input#city").val();
    var stateInput = $("input#state").val();
    var zipInput = $("input#zip").val();

    $(".your-name").text(yourNameInput);
    $(".addressee").text(addresseeInput);
    $(".street").text(streetInput);
    $(".city").text(cityInput);
    $(".state").text(stateInput);
    $(".zip").text(zipInput);

    $("#letter").show();

    event.preventDefault();
  });
});
