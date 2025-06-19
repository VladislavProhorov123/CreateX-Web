gsap.registerPlugin(ScrollTrigger)
const tl = gsap.timeline();
const dialog = document.querySelector("dialog");
const openModal = document.querySelector(".header__btn");
const closeModal = document.querySelector(".close-modal");

function openModalAndBlockScroll() {
  dialog.showModal();
  document.body.classList.add("scroll-block");
}

function returnScroll() {
  document.body.classList.remove("scroll-block");
}

function close() {
  dialog.close();
  returnScroll();
}

openModal.addEventListener("click", openModalAndBlockScroll);
closeModal.addEventListener("click", () => {
  close();
});

function closeOnOverlayClick({ currentTarget, target }) {
  const dialog = currentTarget;
  const isOnOverlayClick = target === dialog;
  if (isOnOverlayClick) {
    close();
  }
}

dialog.addEventListener("click", closeOnOverlayClick);
dialog.addEventListener("cancel", () => {
  returnScroll();
});

const dialogSingUp = document.querySelector(".dialog__singup");
const openModalSingUp = document.querySelector(".modal__singup");
const closeModalSingUp = document.querySelector(".close-modal-singup");

function openSecondModal() {
  dialogSingUp.showModal();
  document.body.classList.add("scroll-block");
}

function closeSecondModal() {
  dialogSingUp.close();
  document.body.classList.remove("scroll-block");
}

openModalSingUp.addEventListener("click", openSecondModal);
closeModalSingUp.addEventListener("click", closeSecondModal);

function closeOnOverlayClickSecond({ currentTarget, target }) {
  if (target === currentTarget) {
    closeSecondModal();
  }
}

dialogSingUp.addEventListener("click", closeOnOverlayClickSecond);
dialogSingUp.addEventListener("cancel", closeSecondModal);

tl.fromTo(
  ".video",
  { x: -100, opacity: 0 },
  { x: 0, opacity: 1, duration: 1 },
).fromTo(
  ".about__text",
  { y: 50, opacity: 0 },
  { y: 0, opacity: 1, duration: 1 },
  0.4,
).fromTo('.about__btn1',
    {y: 30, opacity: 0},
    {y: 0, opacity: 1, duration: 1},
    0.6,
).fromTo('.about__btn2',
    {y: 30, opacity: 0},
    {y: 0, opacity: 1, duration: 1},
    1,
).fromTo('.logo',
    {y: -50, opacity: 0},
    {y: 0, opacity: 1, duration: 1},
    1.2,
).fromTo('.menu__list li',
    {y: -50, opacity: 0},
    {y: 0, opacity: 1, duration: 1, stagger: 0.15},
    1.2,
).fromTo('.header__btn-red',
    {y: -50, opacity: 0},
    {y: 0, opacity: 1, duration: 1, },
    2,
).fromTo('.header__btn',
    {y: -50, opacity: 0},
    {y: 0, opacity: 1, duration: 1, },
    2.4,
).fromTo('.bg__logo-white',
    {scale: 0, opacity: 0},
    {scale: 1, opacity: 1, duration: 1, stagger: 0.2},
    1.2,
).fromTo('.header__img',
    {scale: 0,  y: 50},
    {scale: 1, duration: 1, y: 0},
    0.4,
)

gsap.to('.header__right',{
    scrollTrigger: {
        trigger: '.header',
        markers: true,
        start: 'top top',
        scrub: true,
    },
    yPercent: 80,
    scale: 0.5,
    xPercent: -80,
    opacity: 0,
})
gsap.to('.header__img',{
    scrollTrigger: {
        trigger: '.header',
        markers: true,
        start: 'top top',
        scrub: true,
    },
    opacity: 0,
    yPercent: -80
})

