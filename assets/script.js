function searchbarON() {
    document.querySelector('#searchbar').classList.remove('search-bar-off');
    document.querySelector('#searchbar').classList.add('search-bar-on');
}

function searchbarOFF() {
    document.querySelector('#searchbar').classList.remove('search-bar-on');
    document.querySelector('#searchbar').classList.add('search-bar-off');
}

function menucriarON() {
    document.querySelector('#menucriacao').classList.remove('menu-criacao-off')
    document.querySelector('#menucriacao').classList.add('menu-criacao-on')
}

function menucriarOFF() {
    document.querySelector('#menucriacao').classList.remove('menu-criacao-on')
    document.querySelector('#menucriacao').classList.add('menu-criacao-off')

}