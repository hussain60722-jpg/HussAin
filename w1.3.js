const colorBox = document.getElementById('ColorBox');
const changeColorBtn = document.getElementById('changeColorBtn');
const color = [
    'lightblue',
    'lightgreen',
    'lightcoral',
    'lightgoldenrodyellow',
    'lightpink'
];
function getRandomColor() {
    const index = Math.floor(Math.random() * color.length);
    return color[index];
}
changeColorBtn.addEventListener('click', function () {
    colorBox.style.backgroundColor = getRandomColor();
});