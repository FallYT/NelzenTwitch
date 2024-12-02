document.addEventListener('DOMContentLoaded', () => {
    const instagramLink = document.getElementById('instagram-link');
    const instagramMessage = document.getElementById('instagram-message');

    instagramLink.addEventListener('click', (e) => {
        e.preventDefault();
        instagramMessage.style.display = 'block';
        
        setTimeout(() => {
            instagramMessage.style.display = 'none';
        }, 2000);
    });
});
