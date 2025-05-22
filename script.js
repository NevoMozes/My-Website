const image = document.getElementById('profileImage');
const button = document.getElementById('switchButton');
const images = ['images/me1.jpg', 'images/me2.jpg'];
let currentIndex = 0;

button.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  image.src = images[currentIndex];
});