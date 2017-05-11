document.querySelectorAll('div.universidade').forEach(div => {
    div.addEventListener('click', event => {
        document.querySelector('#terceira_tela').style.display = 'flex';
        document.querySelector('#segunda_tela').style.display = 'none';
    })
});

document.querySelector('#segunda_tela a.voltar').addEventListener('click', event => {
    document.querySelector('#primeira_tela').style.display = 'flex';
    document.querySelector('#segunda_tela').style.display = 'none';
});