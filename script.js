document.addEventListener('DOMContentLoaded', () => {
    // Instagram Logo Handler
    const instagramLogo = document.getElementById('instagram-logo');
    const notAvailableText = document.getElementById('not-available');
    
    instagramLogo.addEventListener('click', (event) => {
        event.preventDefault();
        notAvailableText.style.display = 'block';
        
        setTimeout(() => {
            notAvailableText.style.display = 'none';
        }, 2000);
    });

    // Character Movement
    const character = document.querySelector('.growtopia-character');
    let movingRight = true;
    let currentLeft = 0;

    function moveCharacter() {
        const windowWidth = window.innerWidth;
        const characterWidth = character.offsetWidth;

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

    // Smoother animation with requestAnimationFrame
    function animate() {
        moveCharacter();
        requestAnimationFrame(animate);
    }

    animate();
});
