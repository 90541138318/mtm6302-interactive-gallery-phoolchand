// Each image has a file path, alt text (for screen readers) and a caption (shown in the pop-up).
// I wrote the alt text and captions from your file names, so edit them to match the photos.
const images = [
    { src: 'images/Nature1.jpg', alt: 'A green nature landscape', caption: 'Nature' },
    { src: 'images/bath.jpeg', alt: 'A view of Bath', caption: 'Bath' },
    { src: 'images/church.jpeg', alt: 'A church building', caption: 'Church' },
    { src: 'images/foggy.jpeg', alt: 'A foggy landscape', caption: 'Foggy Morning' },
    { src: 'images/fountain.jpeg', alt: 'A fountain', caption: 'Fountain' },
    { src: 'images/lion1.jpg', alt: 'A lion', caption: 'Lion' },
    { src: 'images/longstairs.jpeg', alt: 'A long staircase', caption: 'Long Stairs' },
    { src: 'images/mountain.jpeg', alt: 'A mountain', caption: 'Mountain' },
    { src: 'images/nightmountain.jpeg', alt: 'A mountain at night', caption: 'Night Mountain' },
    { src: 'images/river.jpeg', alt: 'A river', caption: 'River' },
    { src: 'images/rivercanon.jpeg', alt: 'A river canyon', caption: 'River Canyon' },
    { src: 'images/switzerland.jpeg', alt: 'A scenic view in Switzerland', caption: 'Switzerland' },
    { src: 'images/TWOBIRDS.jpeg', alt: 'Two birds', caption: 'Two Birds' },
    { src: 'images/vespa.jpeg', alt: 'A Vespa scooter', caption: 'Vespa' },
    { src: 'images/wARNERS.jpeg', alt: 'Warners', caption: 'Warners' },
];

// Get the gallery container
const gallery = document.getElementById('gallery');

// Modal elements
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const modalCaption = document.getElementById('modal-caption');
const closeButton = document.getElementById('close');

// Dynamically add images to the gallery
images.forEach(({ src, alt, caption }) => {
    const imgElement = document.createElement('img');
    imgElement.src = src;
    imgElement.alt = alt;
    imgElement.loading = 'lazy';
    imgElement.dataset.caption = caption;
    imgElement.dataset.src = src;

    // Helps you find wrong file names (check the Console, F12)
    imgElement.addEventListener('error', () => {
        console.warn('Image not found:', src);
    });

    gallery.appendChild(imgElement);
});

function openModal(img) {
    modalImage.src = img.dataset.src;
    modalImage.alt = img.alt;
    modalCaption.textContent = img.dataset.caption;
    modal.style.display = 'flex';
}

function closeModal() {
    modal.style.display = 'none';
}

// Open the modal when a gallery image is clicked (event delegation)
gallery.addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {
        openModal(event.target);
    }
});

// Close with the X button
closeButton.addEventListener('click', closeModal);

// Close when clicking the dark background outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

// Close with the Escape key
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeModal();
    }
});