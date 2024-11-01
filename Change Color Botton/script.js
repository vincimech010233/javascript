const colorBox = document.querySelector('.color-box');
const button = document.getElementById('color-button');

button.addEventListener('click', () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    colorBox.style.backgroundColor = randomColor;
});
