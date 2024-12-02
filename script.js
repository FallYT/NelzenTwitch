// Select the character image
const character = document.querySelector('.growtopia-character');

// Function to get random positions
function getRandomPosition() {
    // Get the width and height of the window
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Generate random positions within the window
    const randomX = Math.random() * windowWidth; // Random horizontal position
    const randomY = Math.random() * windowHeight; // Random vertical position

    return { x: randomX, y: randomY };
}

// Move the character to a random position
function moveCharacter() {
    const { x, y } = getRandomPosition();

    // Apply the random positions to the character's style
    character.style.left = `${x}px`;
    character.style.top = `${y}px`;
}

// Move the character every 2 seconds (2000ms)
setInterval(moveCharacter, 2000);
