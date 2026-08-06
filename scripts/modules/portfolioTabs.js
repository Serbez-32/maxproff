export default function initPortfolioSwitcher() {
    const tabs = document.querySelectorAll('.portfolio__tabs-button');
    const image = document.querySelector('.portfolio__image');

    const prev = document.querySelector('.portfolio__arrow--prev');
    const next = document.querySelector('.portfolio__arrow--next');

    const portfolioImages = {
        cosmetic: [
            './images/cosmetic/remont_1.png',
            './images/cosmetic/remont_2.jpg',
            './images/cosmetic/remont_3.jpg',
        ],
        capital: [
            './images/capital/remont_1.jpg',
            './images/capital/remont_2.webp',
            './images/capital/remont_3.webp',
        ],
        turnkey: [
            './images/turnkey/remont_1.png',
            './images/turnkey/remont_2.jpeg',
            './images/turnkey/remont_3.webp',
        ],
        designer: [
            './images/designer/remont_1.jpg',
            './images/designer/remont_2.jpeg',
            './images/designer/remont_3.webp',
        ]
    };


    let currentTab = 'cosmetic';
    let currentIndex = 0;


    function updateImage() {
        image.src = portfolioImages[currentTab][currentIndex];
    }

    tabs.forEach(tab => {

        tab.addEventListener('click', () => {

            tabs.forEach(item => {
                item.classList.remove('portfolio__tab--active');
            });


            tab.classList.add('portfolio__tab--active');


            currentTab = tab.dataset.tab;
            currentIndex = 0;

            updateImage();

        });

    });


    function nextImage() {

        currentIndex++;

        if (currentIndex >= portfolioImages[currentTab].length) {
            currentIndex = 0;
        }

        updateImage();
    }


    function prevImage() {

        currentIndex--;

        if (currentIndex < 0) {
            currentIndex = portfolioImages[currentTab].length - 1;
        }

        updateImage();

    }


    next.addEventListener('click', nextImage);
    prev.addEventListener('click', prevImage);


    let touchStartX = 0;
    let touchEndX = 0;


    image.addEventListener('touchstart', (event) => {

        touchStartX = event.changedTouches[0].screenX;

    });


    image.addEventListener('touchend', (event) => {

        touchEndX = event.changedTouches[0].screenX;


        const swipeDistance = touchEndX - touchStartX;


        if (swipeDistance < -50) {
            nextImage();
        }

        if (swipeDistance > 50) {
            prevImage();
        }

    });

}