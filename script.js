// Select the Instagram logo and "Not Yet Available" text
const instagramLogo = document.getElementById('instagram-logo');
const notAvailableText = document.getElementById('not-available');

// Add event listener for Instagram logo click
instagramLogo.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent redirection
    notAvailableText.style.display = 'block'; // Show the "Not Yet Available" text
    setTimeout(() => {
        notAvailableText.style.display = 'none'; // Hide after 2 seconds
    }, 2000);
});

// Character movement
const character = document.querySelector('.growtopia-character');
let movingRight = true;

function moveCharacter() {
    const windowWidth = window.innerWidth;
    const characterWidth = character.offsetWidth;

    let currentLeft = parseFloat(character.style.left) || 0;

    if (movingRight) {
        currentLeft += 5;
        if (currentLeft >= windowWidth - characterWidth) {
            movingRight = false;
            character.style.transform = 'scaleX(-1)';
        }
    } else {
        currentLeft -= 5;
        if (currentLeft <= 0) {
            movingRight = true;
            character.style.transform = 'scaleX(1)';
        }
    }

    character.style.left = `${currentLeft}px`;
}

setInterval(moveCharacter, 10);
