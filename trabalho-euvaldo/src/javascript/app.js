let btn_entrar= document.getElementById('btn-entrar');
let btn_cadastrar_conta = document.getElementById('btn-cadastrar-conta');
let btn_voltar = document.getElementById('btn-voltar');
let activity_list = document.querySelectorAll('.activity');

btn_entrar.addEventListener('touchend', evt => {
	oculta_tela();
	mostra_tela('tela-principal');
});


btn_cadastrar_conta.addEventListener('touchend', evt => {
	oculta_tela();
	mostra_tela('tela-cadastrar-conta');
});


btn_voltar.addEventListener('touchend', evt => {
	oculta_tela();
	mostra_tela('tela-principal');
});


let oculta_tela = () => {
	for(let elem of activity_list)
	{
		if(elem.classList.contains('activity-main'))
		{
			elem.classList.remove('activity-main');
		}
	}
}


let mostra_tela = (id) => {
	for(let elem of activity_list)
	{
		if(elem.id == id)
		{
			elem.classList.add('activity-main');
		}
	}
}

// Método sleep
let sleep = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
}