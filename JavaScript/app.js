// list of colours to use
// dynamically change them
// apply them, and change text
// select them randomly through the button

const colours = ['blue', 'red', 'purple', 'orange', 'green', 'yellow', 'pink', 'indigo'];

const colour = document.querySelector('.colour');
const button = document.getElementById('btn');

button.addEventListener('click', function() {
    // click button, change text
    // text already has something

    let newColour = colours[randomColour()];

    colour.textContent = newColour;
    document.body.style.backgroundColor = newColour;
})

function randomColour() {
    return Math.floor(Math.random() * colours.length)
}