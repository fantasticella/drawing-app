const colorInput = document.getElementById('color');
const weight = document.getElementById('weight');
const clear = document.getElementById('clear');

function draw() {
    noFill();

    if (mouseIsPressed) {
        const point = {
            x: mouseX,
            y: mouseY,
            // storing the color and weights provided by the inputs for each point
            color: colorInput.value,
            weight: weight.value
        };
        currentPath.push(point);
    }

    paths.forEach(path => {
        beginShape();
        path.forEach(point => {
            // using the color and the weight to style the stroke
            stroke(point.color);
            strokeWeight(point.weight);
            vertex(point.x, point.y);
        });
        endShape();
    });
}

clear.addEventListener('click', () => {
    // Remove all the paths
    paths.splice(0);

    // Clear the background
    background(255);
});
And with this we have finished our little application! Yey! 😃

The entire JS code
const colorInput = document.getElementById('color');
const weight = document.getElementById('weight');
const clear = document.getElementById('clear');
const paths = [];
let currentPath = [];

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(255);
}

function draw() {
    noFill();

    if (mouseIsPressed) {
        const point = {
            x: mouseX,
            y: mouseY,
            color: colorInput.value,
            weight: weight.value
        };
        currentPath.push(point);
    }

    paths.forEach(path => {
        beginShape();
        path.forEach(point => {
            stroke(point.color);
            strokeWeight(point.weight);
            vertex(point.x, point.y);
        });
        endShape();
    });
}

function mousePressed() {
    currentPath = [];
    paths.push(currentPath);
}

clear.addEventListener('click', () => {
    paths.splice(0);
    background(255);
});