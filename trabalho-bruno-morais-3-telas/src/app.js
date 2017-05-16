console.log("teste");
let key_buttons = document.querySelectorAll('.btn');
var div_pagina_1 = document.getElementById('pagina1');
var div_pagina_2 = document.getElementById('pagina2');
var div_pagina_3 = document.getElementById('pagina3');


console.log(key_buttons);
for(let elem of key_buttons) {
    elem.addEventListener('click', evt => {
        let value = elem.getAttribute('id');
       console.log("abrindo= " +value);
        if(value && value == 'link_1') {
            console.log("abre a pagina 1");

          div_pagina_1.setAttribute('class', 'visible');
          div_pagina_2.setAttribute('class', 'hidden');
          div_pagina_3.setAttribute('class', 'hidden');


        }else if(value && value == 'link_2'){
          div_pagina_1.setAttribute('class', 'hidden');
          div_pagina_2.setAttribute('class', 'visible');
          div_pagina_3.setAttribute('class', 'hidden');

        }else if(value && value == 'link_3') {
          div_pagina_1.setAttribute('class', 'hidden');
          div_pagina_2.setAttribute('class', 'hidden');
          div_pagina_3.setAttribute('class', 'visible');


        }
    });
}
