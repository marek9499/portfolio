window.addEventListener('DOMContentLoaded', () => {
    onPageLoad();
}, false);

function appendSkillsToDOM() {
    const techBoxContainer = document.querySelector('.tech__box');
    const skills = ['HTML5', 'CSS3', 'SCSS', 'SASS', 'BEM', 'JAVASCRIPT', 'TYPESCRIPT',
                    'ES5/ES6+', 'NODE.JS', 'EXPRESS.JS', 'VSCODE', 'ADOBE XD', 'FIGMA',
                    'REST', 'JQUERY', 'AJAX', 'JSON', 'MOBILE-FIRST', 'MYSQL', 'MONGODB',
                    'GIT', 'GITHUB', 'ANGULAR', 'RXJS', 'NGRX','GULP'];

    for (let i = 0; i < skills.length; i++) {
        let div = document.createElement('div');
        div.setAttribute('class', 'tech__item');
        div.innerHTML = "<p>" + skills[i] + "</p>";
        techBoxContainer.appendChild(div);
    }
}

function onPageLoad() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.navigation');
    const darkModeBtn = document.querySelector('.darkModeSwitch');
    const isEnabledDM = localStorage.getItem('darkmode');

    appendSkillsToDOM();

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