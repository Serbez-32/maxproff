export default function initModalMobile() {

    const openBtn = document.querySelector('.is-open');
    const modal = document.querySelector('.modal');
    const closeBtn = document.querySelector('.btn__modal__close');
    const modalOverlay = document.querySelector('.modal__overlay');

    openBtn.addEventListener('click', () => {
        modal.classList.add('active');
    })

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
    })

    modalOverlay.addEventListener('click', () => {
        modal.classList.remove('active');
    })
}