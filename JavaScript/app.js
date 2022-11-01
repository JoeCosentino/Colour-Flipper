const colours = ['blue', 'red', 'purple', 'orange', 'green', 'yellow', 'pink', 'indigo', 'grey', 'lightblue'];

const colour = document.querySelector('.colour');
const button = document.getElementById('btn');

button.addEventListener('click', function() {

    let newColour = colours[randomColour()];

    colour.textContent = newColour;
    document.body.style.backgroundColor = newColour;
})

function randomColour() {
    return Math.floor(Math.random() * colours.length)
}