

window.onload = function(){

    // 1. pobieramy przycisk i pobieramy body
    // 2. robimy klik dla przycisku (onclick, addeventlistener)
    // 3. zmieniamy klase dla body (classList.toggle)

    document.querySelector('[data-js="header-hamburger"]').addEventListener('click', function(){
        document.body.classList.toggle('menu-isOpen');
    })


}