const dialog = document.querySelector('dialog');
const openModal = document.querySelector('.header__btn');
const closeModal = document.querySelector('.close-modal');

function openModalAndBlockScroll() {
    dialog.showModal();
    document.body.classList.add('scroll-block');
}

function returnScroll() {
    document.body.classList.remove('scroll-block');
}

function close() {
    dialog.close();
    returnScroll();
}

openModal.addEventListener('click', openModalAndBlockScroll)
closeModal.addEventListener('click', () => {
    close()
})

function closeOnOverlayClick({currentTarget, target}) {
    const dialog = currentTarget;
    const isOnOverlayClick = target === dialog;
    if(isOnOverlayClick) {
        close()
    }
}

dialog.addEventListener('click', closeOnOverlayClick);
dialog.addEventListener('cansel', () => {
    returnScroll()
})


