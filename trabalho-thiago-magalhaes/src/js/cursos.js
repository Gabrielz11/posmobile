document.querySelector('#terceira_tela a.voltar').addEventListener('click', event => {
    document.querySelector('#terceira_tela').style.display = 'none';
    document.querySelector('#segunda_tela').style.display = 'flex';
});