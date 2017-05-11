document.querySelectorAll('div.conta').forEach(div => {
    div.addEventListener('click', event => {
        document.querySelector('#tela_extrato').style.display = 'flex';
        document.querySelector('#tela_contas').style.display = 'none';
    })
});

document.querySelector('#tela_contas a.voltar').addEventListener('click', event => {
    document.querySelector('#tela_login').style.display = 'flex';
    document.querySelector('#tela_contas').style.display = 'none';
});