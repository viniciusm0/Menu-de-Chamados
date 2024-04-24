var searchbar = document.getElementById("searchbar");
var menucriar = document.getElementById("menucriacao");

function searchbarON() {
    searchbar.style.animationName = "searchbar-animation"

    document.querySelector('#searchbar').classList.remove('search-bar-off');
    document.querySelector('#searchbar').classList.add('search-bar-on');
}

function searchbarOFF() {
    searchbar.style.animationName = "searchbar-out";

    setTimeout (function(){
        document.querySelector('#searchbar').classList.remove('search-bar-on');
        document.querySelector('#searchbar').classList.add('search-bar-off');
    }, 801)
}

function menucriarON() {
    menucriar.style.animationName = "newinfo-animation";
    document.querySelector('#menucriacao').classList.remove('menu-criacao-off')
    document.querySelector('#menucriacao').classList.add('menu-criacao-on')
}

function menucriarOFF() {
    menucriar.style.animationName = "newinfo-out";

    setTimeout (function(){
        document.querySelector('#menucriacao').classList.remove('menu-criacao-on')
        document.querySelector('#menucriacao').classList.add('menu-criacao-off')
    }, 1001)
    

}

document.getElementById("teste").innerHTML = "Page location is " + window.location.href;