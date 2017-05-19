//Componentes
//Botoes
let btnTela2 = document.getElementById('btnTela2');
let btnTela3 = document.getElementById('btnTela3');
let btnVoltarTela1 = document.getElementById('btnVoltarTela1');
let btnVoltarTela2 = document.getElementById('btnVoltarTela2');

//Telas
let tela1 = document.getElementById('tela1');
let tela2 = document.getElementById('tela2');
let tela3 = document.getElementById('tela3');

//Evento dos botoes

btnTela2.addEventListener('click', evento => {
  tela1.setAttribute('class', 'hidden');
  tela2.setAttribute('class', 'visible');
  tela3.setAttribute('class', 'hidden');
});

btnTela3.addEventListener('click', evento => {
  tela1.setAttribute('class', 'hidden');
  tela2.setAttribute('class', 'hidden');
  tela3.setAttribute('class', 'visible');
});

btnVoltarTela1.addEventListener('click', evento => {
  tela1.setAttribute('class', 'visible');
  tela2.setAttribute('class', 'hidden');
  tela3.setAttribute('class', 'hidden');
});

btnVoltarTela2.addEventListener('click', evento => {
  tela1.setAttribute('class', 'hidden');
  tela2.setAttribute('class', 'visible');
  tela3.setAttribute('class', 'hidden');
});

// Método sleep
let sleep = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
}
