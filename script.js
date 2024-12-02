// Select the Instagram logo and the "Not Yet Available" message
const instagramLink = document.querySelector('.social-logo.instagram');
const notYetAvailableText = document.querySelector('.not-yet-available');

// Add click event listener to Instagram logo
instagramLink.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent navigation
    notYetAvailableText.style.display = 'block'; // Show the text
    setTimeout(() => {
        notYetAvailableText.style.display = 'none'; // Hide after 2 seconds
    }, 2000);
});

// Select the character image element
const character = document.querySelector('.growtopia-character');

// Set the initial direction (true = moving right, false = moving left)
let movingRight = true;

// Function to move the character
function moveCharacter() {
    const windowWidth = window.innerWidth; // Get the window width
    const characterWidth = character.offsetWidth; // Get the character's width

    let currentLeft = parseFloat(character.style.left) || 0; // Get the current left position, default to 0

    // If the character is moving right
    if (movingRight) {
        currentLeft += 5; // Move the character to the right

        if (currentLeft >= windowWidth - characterWidth) {
            // If the character reaches the right side, reverse direction and mirror
            movingRight = false;
            character.style.transform = 'scaleX(-1)'; // Mirror the character horizontally
        }
    } else {
        currentLeft -= 5; // Move the character to the left

        if (currentLeft <= 0) {
            // If the character reaches the left side, reverse direction and mirror
            movingRight = true;
            character.style.transform = 'scaleX(1)'; // Reset character direction
        }
    }

    // Update the character's left position
    character.style.left = `${currentLeft}px`; // Apply the new position
}

// Start moving the character every 10 milliseconds
setInterval(moveCharacter, 10);
