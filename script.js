// Select the character image element
const character = document.querySelector('.growtopia-character');

// Set the size of the character (you can adjust these values to match your image size)
const characterWidth = character.width;
const characterHeight = character.height;

// Function to get random positions within the window (ensures the character stays on the screen)
function getRandomPosition() {
    const windowWidth = window.innerWidth - characterWidth;  // Subtract character width to avoid overflow
    const windowHeight = window.innerHeight - characterHeight;  // Subtract character height to avoid overflow

    const randomX = Math.random() * windowWidth;  // Random X position
    const randomY = Math.random() * windowHeight;  // Random Y position

    return { x: randomX, y: randomY };
}

// Function to move the character to the random position
function moveCharacter() {
    const { x, y } = getRandomPosition();
    character.style.position = 'absolute';  // Ensure absolute positioning for movement
    character.style.left = `${x}px`;  // Apply the random X position
    character.style.top = `${y}px`;  // Apply the random Y position
}

// Move the character every 2 seconds (2000ms)
setInterval(moveCharacter, 2000);
