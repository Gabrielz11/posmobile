
function MudarConteudo(opcao){

 var tab = document.getElementById(opcao);

    if(tab.id == 'tab1'){
      document.getElementById('conteudo1').style.display = "block";
      document.getElementById('conteudo2').style.display = "none";
      document.getElementById('conteudo3').style.display = "none";
    }
    if(tab.id == 'tab2'){
      document.getElementById('conteudo3').style.display = "none";
      document.getElementById('conteudo1').style.display = "none";
      document.getElementById('conteudo2').style.display = "block";
    }
    if(tab.id == 'tab3'){
      document.getElementById('conteudo1').style.display = "none";
      document.getElementById('conteudo2').style.display = "none";
      document.getElementById('conteudo3').style.display = "block";
    }
}
