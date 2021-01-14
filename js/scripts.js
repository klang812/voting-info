$(document).ready(function() {

  $("form#ourForm").submit(function(e){
    e.preventDefault();

    const age = parseInt($("input#age").val());
  
    if (age >= 18) {
      $('#voting-page').show();
      $('#under-18').hide();
    } else {
      $('#under-18').show();
      $('#voting-page').hide();
    } 
  });
  
  
});