$(document).ready(function(){
  $.ajax({
    url: "https://andreihelo-restful-api.herokuapp.com/students",
    type: 'GET',
    dataType: 'json',
    success: function(data) {
      $.each(data, function(index, item) {
        $("#tabla1").append(
          "<tr><td>" + item.id + "</td><td>" + item.registration_number +
          "</td><td>" + item.name + "</td><td>" + item.last_name +
          "</td><td>" + item.status + "</td></tr>"
        );
      });
    }
  });
  $('#buscar').click(function(){
    var id = $('#id').val();
    $.ajax({
      url: "https://andreihelo-restful-api.herokuapp.com/students/"+ id,
      type: 'GET',
      dataType: 'json',
      success: function(data) {
        $("#tabla2").append(
          "<tr><td>" + data.id + "</td><td>" + data.registration_number +
          "</td><td>" + data.name + "</td><td>" + data.last_name +
          "</td><td>" + data.status + "</td></tr>"
        );
      }
    });
  });
  $("#enter").on("click", function(){
    var idRegistro = $("#mat").val();
    var firstName = $("#name").val();
    var lastName = $("#lname").val();
    var statusCode = $("#status").val();

    $.ajax({
      type: "POST",
      url: "https://andreihelo-restful-api.herokuapp.com/students/",
      data: {id: idRegistro, registration_number: idRegistro, name:firstName, last_name:lastName, status:statusCode },
      dataType: 'json',
      error: function(){
        alert("Error..." + idRegistro + ".\n");
      },
      success: function(data){
        alert("Subida Exitosa!");
        $("table tbody").append(
          "<tr><td>" + data.id +"</td><td>"+ data.registration_number +
          "</td><td>" + data.name + "</td><td>" + data.last_name +
          "</td><td>" + data.status + "</td></tr>"
        );
      }
    });
  });
});
