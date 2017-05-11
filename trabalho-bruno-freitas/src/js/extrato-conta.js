document.querySelector('#tela_extrato a.voltar').addEventListener('click', event => {
    document.querySelector('#tela_extrato').style.display = 'none';
    document.querySelector('#tela_contas').style.display = 'flex';
});