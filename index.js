const menuToggle = document.querySelector('.toggle');
const menuToggleButton = document.querySelector('.toggle1');
const showcase = document.querySelector('.showcase');


//side menu  
menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
})

menuToggleButton.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
})

