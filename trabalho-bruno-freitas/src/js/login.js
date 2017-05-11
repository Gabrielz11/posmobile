document.querySelector('#tela_login form').addEventListener('submit', event => {
    event.preventDefault();

    document.querySelector('#tela_login').style.display = 'none';
    document.querySelector('#tela_contas').style.display = 'flex';
});