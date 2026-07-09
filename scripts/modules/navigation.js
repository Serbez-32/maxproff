 /*  export default function initNavigation() {
    const links = document.querySelectorAll('.header__link');
    const sections = document.querySelectorAll('.price-calculator, .repair-types, .offers, .work-process, .why-us, .team, #footer');

}*/

export default function initNavigation() {
    const links = document.querySelectorAll('.header__link');
    links.forEach(link => link.addEventListener('click', function() {
        links.forEach(l => l.classList.remove('header__link-active'));
        this.classList.add('header__link-active');
    }));
}
