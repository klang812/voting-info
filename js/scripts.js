$(document).ready(function() {
  if (parseInt("input#age" >= 18)) {
    $('#voting-page').show();
  } else {
    $('#under-18').show();
  }
  
});