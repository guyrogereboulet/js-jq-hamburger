// La index.html e il css devono rimanere inalterati, dovete solo inserire il codice js per far funzionare l'hamburger menù.

// 1)Mostrare il menu al click
$("i.fas.fa-bars").click(
  function() {
    $(".hamburger-menu").show("slow");
  }
)


// 2)Nascondere il menu al click
$(".hamburger-menu a").click(
  function() {
   $(".hamburger-menu").hide("slow");
  }
);
