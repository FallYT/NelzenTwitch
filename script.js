// Select the character image element
const character = document.querySelector('.growtopia-character');

// Set the initial direction (true = moving right, false = moving left)
let movingRight = true;

// Function to move the character
function moveCharacter() {
    const windowWidth = window.innerWidth;  // Get the window width
    const characterWidth = character.offsetWidth;  // Get the character's width

    let currentLeft = parseFloat(character.style.left) || 0; // Get the current left position, default to 0

    // If the character is moving right
    if (movingRight) {
        currentLeft += 5;  // Move the character to the right by 5px per frame

        if (currentLeft >= windowWidth - characterWidth) {
            // If the character reaches the right side, reverse direction and mirror it
            movingRight = false;
            character.style.transform = 'scaleX(-1)'; // Mirror the character horizontally
        }
    } else {
        currentLeft -= 5;  // Move the character to the left by 5px per frame

        if (currentLeft <= 0) {
            // If the character reaches the left side, reverse direction and mirror it
            movingRight = true;
            character.style.transform = 'scaleX(1)';  // Reset the character's direction
        }
    }

    // Update the character's left position
    character.style.left = `${currentLeft}px`;  // Apply the new left position
}

// Start moving the character every 10 milliseconds (for smooth movement)
setInterval(moveCharacter, 10);

// Function to display the "Not Yet Available" message under Instagram link for 2 seconds
document.getElementById("instagram-link").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the link from opening or redirecting
    const message = document.getElementById("instagram-message");
    message.style.display = "block";  // Show the message
    setTimeout(function() {
        message.style.display = "none";  // Hide the message after 2 seconds
    }, 2000);
});
