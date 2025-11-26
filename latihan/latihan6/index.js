const menuToggle = document.querySelector(".menuToggle input");
const menu = document.querySelector(".header ul");

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('slide')
})