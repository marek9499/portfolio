//document.querySelectorAll("*").forEach(el => el.style.border = '1px solid red');


const getStylesheetRule = selector => {
    const currentStylesheet = document.styleSheets[0].cssRules;
    const index = [...currentStylesheet].findIndex(e => e.selectorText == selector);
    return currentStylesheet[index];
}

window.addEventListener('DOMContentLoaded', () => {
    onPageLoad();
}, false);





function onPageLoad() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.navigation');
    const darkModeBtn = document.querySelector('.darkModeSwitch');
    const isEnabledDM = localStorage.getItem('darkmode');
    const techBoxContainer = document.querySelector('.tech__box');
    const skills = ['HTML5', 'CSS3', 'SCSS', 'OOCSS', 'BEM' ,'JS', 'ES5/ES6+', 'NODE.JS', 'EXPRESS.JS', 'VSCODE', 'ADOBE XD', 'REST', 'JQUERY', 'AJAX', 'JSON', 'MOBILE-FIRST', 'MYSQL', 'MONGODB'];

    for(let i = 0; i < skills.length; i++)
    {
        let div = document.createElement('div');
        div.setAttribute('class', 'tech__item');
        div.innerHTML = "<p>"+ skills[i] +"</p>";
        techBoxContainer.appendChild(div);
    }


    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('hamburger--active');
        nav.classList.toggle('navigation--active');
    });

    if (isEnabledDM == "on") {
        document.querySelector("html").classList.toggle('darkmode');
    }


    darkModeBtn.addEventListener('click', function () {
        if (isEnabledDM == null || isEnabledDM == "off") {
            localStorage.setItem('darkmode', 'on');
        }
        else {
            localStorage.setItem('darkmode', 'off');
        }
        document.querySelector("html").classList.toggle('darkmode');
    });


    document.querySelectorAll('[data-link]').forEach(el => {
        el.addEventListener('click', function (e) {
            const link = e.target.dataset.link;
            window.open(link);
        });
    });


}