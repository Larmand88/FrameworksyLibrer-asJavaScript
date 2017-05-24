$( function() {
  $( "ul.droptrue" ).sortable({
    connectWith: "ul.dropfalse"
  });

  $( "ul.dropfalse" ).sortable({
    connectWith: "ul.droptrue"
  });

  $( "ul.droptrued2" ).sortable({
    connectWith: "ul.droptrued3,ul.dropfalse"
  });

  $( "ul.droptrued3" ).sortable({
    connectWith: "ul.droptrued2"
  });

  $( "#sortable1, #sortable2, #sortable3, #sortable4" ).disableSelection();
} );
