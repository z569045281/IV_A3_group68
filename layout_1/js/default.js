const menuToggle = document.querySelector('.menu-toggle');
const menuToggleButton = document.querySelector('.toggle1');
const menu = document.querySelector('.menu');
const mapContainer = document.querySelector('.content');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
    mapContainer.classList.toggle('active');
})

// menuToggleButton.addEventListener('click', () => {
//     menuToggle.classList.toggle('active');
//     showcase.classList.toggle('active');
// })