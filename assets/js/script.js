
$(document).ready(function(){

$("h6").dblclick(function(){
$(this).css({
"color": "red",
});
});

$(".card-title").on("click",function(){

  if($(".card-text").is(":visible")){
    $(".card-text").hide();
  }else{
    $(".card-text").show();
  }
})
$( "#enviarcorreo" ).on( "click", function() {
  alert( "El correo fue enviado correctamente..." );
} );
});
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))