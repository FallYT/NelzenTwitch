// Select the Instagram logo and the "Not Yet Available" text
const instagramLogo = document.querySelector('.instagram');
const notAvailableText = document.getElementById('not-available');

// Add an event listener to the Instagram logo for the click event
instagramLogo.addEventListener('click', function (e) {
    // Prevent default behavior (navigation)
    e.preventDefault();

    // Show the "Not Yet Available" text
    notAvailableText.style.display = 'block';

    // Hide the "Not Yet Available" text after 2 seconds
    setTimeout(function () {
        notAvailableText.style.display = 'none';
    }, 2000);
});
