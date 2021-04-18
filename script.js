const wrapper = document.querySelector(".wrapper");
const hamburgerMenu = document.querySelector("ul i");

hamburgerMenu.addEventListener('click', function() {
    wrapper.classList.toggle("off");
})