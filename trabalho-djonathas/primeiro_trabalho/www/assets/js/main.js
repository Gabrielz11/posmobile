function changePage(page, animation, categoria, item) {
    let home = document.getElementById("home");
    let lista = document.getElementById("lista");
    let detalhes = document.getElementById("detalhes");

    let produtos = [];
    produtos["Apartamento 1"] = {
        "titulo": "Apartamento na 904 SUL",
        "detalhes": "Apartamento novo com 3 quartos",
        "valor": "R$ 200.000,00",
        "imagem": "assets/images/apartamento.jpg"
    };
    produtos["Apartamento 2"] = {
        "titulo": "Apartamento na 806 SUL",
        "detalhes": "Apartamento usado com 2 quartos",
        "valor": "R$ 120.000,00",
        "imagem": "assets/images/apartamento2.jpg"
    };
    produtos["Casa 1"] = {
        "titulo": "Casa na 205 SUL",
        "detalhes": "Linda casa com 3 quartos e piscina",
        "valor": "R$ 320.000,00",
        "imagem": "assets/images/casa.jpg"
    };
    produtos["Casa 2"] = {
        "titulo": "Casa em Taquaralto",
        "detalhes": "Casa nova com 2 quartos",
        "valor": "R$ 120.000,00",
        "imagem": "assets/images/casa2.jpg"
    };
    produtos["Corolla"] = {
        "titulo": "Corolla 2010/2011",
        "detalhes": "Carro seminovo, perfeito estado, 50.000km rodados",
        "valor": "R$ 40.000,00",
        "imagem": "assets/images/corolla.jpg"
    };
    produtos["Palio"] = {
        "titulo": "Palio 2014/2015",
        "detalhes": "Carro novinho, só 20.000 km rodados",
        "valor": "R$ 25.000,00",
        "imagem": "assets/images/palio.jpg"
    };

    switch (page) {
        case "home":
            home.style.display = "block";
            lista.style.display = "none";
            detalhes.style.display = "none";
            home.style.animationName = animation;
            break;
        case "lista":
            home.style.display = "none";
            lista.style.display = "block";
            detalhes.style.display = "none";
            lista.style.animationName = animation;
            document.getElementById("list_title").innerHTML = categoria;

            let itens = document.getElementsByClassName('itens');
            for (i = 0; i < itens.length; i++) {
                if (itens[i].classList.contains(categoria.toLowerCase())) {
                    itens[i].style.display = "block";
                } else {
                    itens[i].style.display = "none";
                }
            }

            document.getElementById("btn_voltar").addEventListener("click", function () {
                previousPage('home', categoria);
            });

            break;
        case "detalhes":
            home.style.display = "none";
            lista.style.display = "none";
            detalhes.style.display = "block";
            detalhes.style.animationName = animation;
            document.getElementById("list_title_2").innerHTML = categoria;
            document.getElementById("detalhes_title").innerHTML = item;

            let produto = produtos[item];

            document.getElementById("img_detalhes").setAttribute("src", produto.imagem);
            document.getElementById("str_titulo").innerHTML = produto.titulo;
            document.getElementById("str_detalhes").innerHTML = produto.detalhes;
            document.getElementById("str_valor").innerHTML = produto.valor;

            document.getElementById("list_title_2").addEventListener("click", function () {
                previousPage('lista', categoria);
            });

            document.getElementById("btn_voltar_2").addEventListener("click", function () {
                previousPage('lista', categoria);
            });
            break;
    }
}

function nextPage(page, categoria, item) {
    changePage(page, "fadeInRight", categoria, item);
}

function previousPage(page, categoria, item) {
    changePage(page, "fadeInLeft", categoria, item);
}