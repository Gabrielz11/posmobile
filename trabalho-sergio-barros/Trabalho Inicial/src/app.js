//Código ts para a mudança de telas
let changeMenu = (evt, tela) => {
    let i, content, menus;

    content = document.getElementsByClassName("telas");
    for(let i = 0; i < content.length; i++){
        content[i].style.display = "none";
    }

    menus = document.getElementsByClassName("tablinks");
    for(let i = 0; i < menus.length; i++){
        menus[i].className = menus[i].className.replace("active","");
    }

    document.getElementById(tela).style.display = "block";
    evt.currentTarget.className += "active";
}