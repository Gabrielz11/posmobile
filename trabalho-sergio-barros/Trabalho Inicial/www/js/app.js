//Código ts para a mudança de telas
let changeMenu = (evt, tela) => {
    let i, content, menus;

    content = document.getElementsByClassName("telas");
    for(let i = 0; i < content.length; i++){
        content[i].style.display = "none";
    }

    menus = document.getElementsByClassName("tabLinks");
    for(let i = 0; i < menus.length; i++){
        menus[i].className = menus[i].className.replace("active","");
    }

    document.getElementById(tela).style.display = "block";
    evt.currentTarget.className += "active";
}

function List(capacity) {
    var collection = [];
    collection = {
        "titulo": "Apartamento na 904 SUL",
        "detalhes": "Apartamento novo com 3 quartos",
        "valor": "R$ 200.000,00",
        "imagem": "assets/images/apartamento.jpg"
    };

    if (capacity != null) {
        collection[capacity];
    }
}

///Get the element at the specified index
function GetItem(index) {
    if (index <= collection.length - 1) {
        return collection[index];
    }
    else {
        throw "Index was out of range. Must be non-negative and less than the size of the collection";
    }
}

///Set the element at the specified index
function SetItem(index, item) {
    if (index <= collection.length - 1) {
        collection[index] = item;
    }
    else {
        throw "Index was out of range. Must be non-negative and less than the size of the collection";
    }
}