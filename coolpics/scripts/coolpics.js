
//Menu button and its related toggling

//This grabs the button, and the menu items
const menuToggle = document.getElementById('menu-toggle');
const menu = document.querySelector('nav ul');

// Add event listener to toggle menu visibility
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});



// The modal, and all it's parts. I wasn't sure if its okay professioanlly to mix const of two different functions, and their parts

//This grabs needed items for the modal, like images, text, and other elements.
const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-image');
const captionText = document.getElementById('caption');
const closeModal = document.getElementById('close-modal');

// Collects all items from the gallery
const galleryImages = document.querySelectorAll('.gallery-item img');

// This opens images when clicked on
galleryImages.forEach(image => {
    image.addEventListener('click', (e) => {
        modal.style.display = "block"; // Show modal
        modalImg.src = e.target.getAttribute('data-src'); // Set the src of modal image
        captionText.innerHTML = e.target.alt; // Set caption text
    });
});

// This allows the modal to be closed when clicked on the X
closeModal.addEventListener('click', () => {
    modal.style.display = "none"; // Hide modal
});


