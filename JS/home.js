const params = new URLSearchParams(window.location.search);
var lang = params.get('lang');

function openAbout() {
    if(lang){
        window.open("../Pages/aboutUs.html?lang=" + lang, "_self");
    } else {
        window.open("../Pages/aboutUs.html?lang=en", "_self");
    }
}

function openContacts() {
    if(lang){
        window.open("../Pages/contacts.html?lang=" + lang, "_self");
    } else {
        window.open("../Pages/contacts.html?lang=en", "_self");
    }
}

function openSupport() {
    if(lang){
        window.open("../Pages/support.html?lang=" + lang, "_self");
    } else {
        window.open("../Pages/support.html?lang=en", "_self");
    }
}

function changeLanguage(){
    if(lang){
        if(lang == 'en'){
            window.location.href = '//' + location.host + location.pathname + "?lang=pt";
        } else if(lang == 'pt') {
            window.location.href = '//' + location.host + location.pathname + "?lang=en";
        }
    } else {
        window.location.href = '//' + location.host + location.pathname + "?lang=en";
    }
}

function openMuseum(id){
    window.open("../Pages/museum.html?lang=" + lang + "&id=" + id, "_self");
}


// !!! ADAPTAR PARA ANGULAR
window.onload = function () {
    if(lang == 'en'){
        $("#languageFlag").attr("src","/images/flags/us.svg");
    } else if(lang == 'pt') {
        $("#languageFlag").attr("src","/images/flags/pt.svg");
    }
}