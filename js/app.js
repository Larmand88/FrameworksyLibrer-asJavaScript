$(document).ready(function(){

  $('.main-titulo').each(function setAnim(){
    $(this).
      animate({color:"white"},1000).animate({color:"yellow"},1000,setAnim);
});
var imagenes = ['image/1.png', 'image/2.png', 'image/3.png', 'image/4.png'];
  for (var i = 0; i < 5; i++) {
    var numeroImagen = Math.floor(Math.random() * imagenes.length)
    var imagenRandom = imagenes[numeroImagen]
    var imagenSeleccionada = "<div class='1"+i+"'><img id='"+numeroImagen+"' class='draggable' src='"+imagenRandom+"'></div>"
    $('.col-1').append(imagenSeleccionada);
    $('.col-1 .1'+i).animate(
      {
        top: "300px"
      }, 2000, function(){}
    )
  }
  for (var i = 0; i < 5; i++) {
    var numeroImagen = Math.floor(Math.random() * imagenes.length)
    var imagenRandom = imagenes[numeroImagen]
    var imagenSeleccionada = "<img id='"+numeroImagen+"' class='draggable' src='"+imagenRandom+"'>"
    $('.col-2').append(imagenSeleccionada);
  }
  for (var i = 0; i < 5; i++) {
    var numeroImagen = Math.floor(Math.random() * imagenes.length)
    var imagenRandom = imagenes[numeroImagen]
    var imagenSeleccionada = "<img id='"+numeroImagen+"' class='draggable' src='"+imagenRandom+"'>"
    $('.col-3').append(imagenSeleccionada);
  }
  for (var i = 0; i < 5; i++) {
    var numeroImagen = Math.floor(Math.random() * imagenes.length)
    var imagenRandom = imagenes[numeroImagen]
    var imagenSeleccionada = "<img id='"+numeroImagen+"' class='draggable' src='"+imagenRandom+"'>"
    $('.col-4').append(imagenSeleccionada);
  }
  for (var i = 0; i < 5; i++) {
    var numeroImagen = Math.floor(Math.random() * imagenes.length)
    var imagenRandom = imagenes[numeroImagen]
    var imagenSeleccionada = "<img id='"+numeroImagen+"' class='draggable' src='"+imagenRandom+"'>"
    $('.col-5').append(imagenSeleccionada);
  }
  for (var i = 0; i < 5; i++) {
    var numeroImagen = Math.floor(Math.random() * imagenes.length)
    var imagenRandom = imagenes[numeroImagen]
    var imagenSeleccionada = "<img id='"+numeroImagen+"' class='draggable' src='"+imagenRandom+"'>"
    $('.col-6').append(imagenSeleccionada);
  }
  for (var i = 0; i < 5; i++) {
    var numeroImagen = Math.floor(Math.random() * imagenes.length)
    var imagenRandom = imagenes[numeroImagen]
    var imagenSeleccionada = "<img id='"+numeroImagen+"' class='draggable' src='"+imagenRandom+"'>"
    $('.col-7').append(imagenSeleccionada);
  }
});
$( function() {
    $( "div.10" ).sortable({
      connectWith: "div.20, div.11"
    });

    $( "div.dropfalse" ).sortable({
      connectWith: "div",
      dropOnEmpty: false
    });

    $( "#sortable1, #sortable2, #sortable3" ).disableSelection();
  } );
