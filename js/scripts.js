$(document).ready(function() {
    $("#pingpong form").submit(function(event) {
        event.preventDefault();
      var display = parseInt($("input#number").val());
      var result = answer(display);
      $(".Push").text(result);
    });
  });

var answer=function(display){
  for(i=1; i<=display; i++){

  if ( i % 15 === 0) {
    $(".Push").append("<li>"+"pingpong"+"</li>");

   }

  else if ( i % 3 === 0){
    $(".Push").append("<li>"+"ping"+"</>")
  }
  else if ( i % 5 === 0) {
    $(".Push").append("<li>"+"pong"+"</>");
     }
  else {
  
      $(".Push").append("<li>"+i+"</>");

  }
}
}
