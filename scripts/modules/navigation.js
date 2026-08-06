export default function initNavigation() {
    const links = document.querySelectorAll('.header__link');
    const sections = document.querySelectorAll(
        '#price-calculator, #services, #portfolio, #team, #offers, #why-us, #footer'
    );

    function setActiveLink() {
        let current = 'price-calculator';
        const offset = window.innerHeight * 0.3;

        sections.forEach(section => {
            const top = section.getBoundingClientRect().top;

            if (top <= offset) {
                current = section.id;
            }
        });

        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 20) {
            current = 'footer';
        }

        links.forEach(link => {
            link.classList.toggle(
                'header__link-active',
                link.hash === `#${current}`
            );
        });
    }

    window.addEventListener('scroll', setActiveLink);
    window.addEventListener('resize', setActiveLink);

    setActiveLink();
}
