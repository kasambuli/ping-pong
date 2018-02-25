var i, value
$(document).ready(function() {
  $("#pingPong form").submit(function(event) {
    event.preventDefault();
    value = parseInt($("input#number").val());
      var result = answer(value);
      $("#push").text(result);
    });
  });

var answer=function() {
  for(i = 1; i <= value; i++){
    if ( i % 15 === 0) {
      $("#push").append("<li>"+"pingpong"+"</li>");
    } else if ( i % 3 === 0){
      $("#push").append("<li>"+"ping"+"</li>");
    } else if ( i % 5 === 0) {
      $("#push").append("<li>"+"pong"+"</li>");
    } else {
      $("#push").append("<li>"+i+"</li>");
    }
  };
};
