const colours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F" ];

const hexColour = document.querySelector('.colour');
const button = document.getElementById('btn');
const bodyClass = document.querySelector('.body')

button.addEventListener('click', function() {
    let hex = "#"

    for(var i = 0; i < 6; i++) {
        hex += colours[randomHexColour()]
    }

    hexColour.textContent = hex;
    bodyClass.style.backgroundColor = hex;
})

function randomHexColour() {
    return Math.floor(Math.random() * colours.length);
}