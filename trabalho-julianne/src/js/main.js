
$(document).ready(function() {

  $(".tela_novo").hide();
  $(".tela_contatos").hide();

$(".contatos").click(function (e) {
   e.preventDefault();
     $(".tela_calendario").hide();
     $(".tela_novo").hide();
     $(".tela_contatos:hidden").show();
});

$(".novo").click(function (e) {
   e.preventDefault();
     $(".tela_calendario").hide();
     $(".tela_contatos").hide();
     $(".tela_novo:hidden").show();
});

$(".calendario").click(function (e) {
   e.preventDefault();
     $(".tela_contatos").hide();
     $(".tela_novo").hide();
     $(".tela_calendario:hidden").show();
});

});
