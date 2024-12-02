document.addEventListener('DOMContentLoaded', () => {
    const character = document.querySelector('.character');
    const characterWrapper = document.querySelector('.character-wrapper');

    // Interactive character hover effect
    characterWrapper.addEventListener('mousemove', (e) => {
        const rect = characterWrapper.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const angleX = (e.clientY - centerY) / 20;
        const angleY = -(e.clientX - centerX) / 20;
        
        character.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    });

    characterWrapper.addEventListener('mouseleave', () => {
        character.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });

    // Instagram link handler
    const instagramLink = document.getElementById('instagram-link');
    const instagramMessage = document.getElementById('instagram-message');

    instagramLink.addEventListener('click', (e) => {
        e.preventDefault();
        instagramMessage.style.display = 'block';
        
        setTimeout(() => {
            instagramMessage.style.display = 'none';
        }, 2000);
    });

    // Particle effect
    function createParticle() {
        const particle = document.createElement('div');
        const backgroundParticles = document.querySelector('.background-particles');
        
        particle.classList.add('particle');
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDuration = `${Math.random() * 5 + 3}s`;
        particle.style.opacity = Math.random().toString();
        
        backgroundParticles.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 6000);
    }

    // Create particles periodically
    setInterval(createParticle, 200);
});
