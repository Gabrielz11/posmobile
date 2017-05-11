document.querySelector('#primeira_tela form').addEventListener('submit', event => {
    event.preventDefault();

    document.querySelector('#primeira_tela').style.display = 'none';
    document.querySelector('#segunda_tela').style.display = 'flex';
});