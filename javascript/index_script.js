
let spinning = false;
let spinCount = 0; // Count the number of spins
const maxSpins = 3; // Maximum number of spins to show the message
const rotationSpeed = 40; // degrees per second

function startSpinning() {
    if (!spinning) {
        const globeImage = document.querySelector('.globe');
        globeImage.style.animation = `spin ${360 / rotationSpeed}s linear infinite`;
        spinning = true;
        spinCount++;
        if (spinCount <= maxSpins) {
            showMessage();
        }
    }
}

function stopSpinning() {
    if (spinning) {
        const globeImage = document.querySelector('.globe');
        globeImage.style.animation = '';
        spinning = false;
    }
}

function showMessage() {
    const message = document.createElement('p');
    message.textContent = "Thanks for spinning the globe!";
    message.classList.add('message');
    message.style.backgroundColor = getRandomColor(); // Generate a random color
    document.querySelector('#tree').appendChild(message);
    setTimeout(() => {
        message.remove();
        if (spinCount < maxSpins) {
            showMessage();
        }
    }, 3000);
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


var carousel = document.querySelector('.carousel');
var carouselInstance = new bootstrap.Carousel(carousel, {
    interval: 2000 // Specify the interval between slides in milliseconds (e.g., 2000ms = 2 seconds)
});