//Codigo JS do APP

let btn_comecar = document.getElementById('btn-comecar');
let btn_segunda_tela = document.getElementById('btn-segunda-tela');
let btn_voltar = document.getElementById('btn-voltar');
let btn_shake = document.getElementById('btn-shake');
let activity_list = document.querySelectorAll('.activity');

// Evento botão começar
btn_comecar.addEventListener('touchend', evt => {
	remove_main();
	mostra_tela('activity-principal');
});

// Evento botão segunda tela
btn_segunda_tela.addEventListener('touchend', evt => {
	remove_main();
	mostra_tela('activity-segunda-tela');
});

// Evento botão voltar
btn_voltar.addEventListener('touchend', evt => {
	remove_main();
	mostra_tela('activity-principal');
});

// Evento botão shake
btn_shake.addEventListener('touchend', evt => {
	btn_shake.classList.add('button-shake');
	sleep(500).then(() => {
		btn_shake.classList.remove('button-shake');
	});
});

// Remove a classe main de todas as activitys
let remove_main = () => {
	for(let elem of activity_list)
	{
		if(elem.classList.contains('activity-main'))
		{
			elem.classList.remove('activity-main');
		}
	}
}

// Adiciona a classe main na activity passada por parâmetro
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