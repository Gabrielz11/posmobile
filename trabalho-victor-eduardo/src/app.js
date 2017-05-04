//Código ts para a mudança de telas
let changeMenu = (evt, screen) => {
    switch (screen) {
        case 'screenOne':
            setTimeout(function () {
                window.location.href = '/index.html'
            }, 500);
            break;
        case 'screenTwo':
            setTimeout(function () {
                window.location.href = '/twoScreen.html'
            }, 500);
            break;
        case 'screenThree':
            setTimeout(function () {
                window.location.href = '/threeScreen.html'
            }, 500);
            break;
    }
};