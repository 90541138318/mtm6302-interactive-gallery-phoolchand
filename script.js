// Array of objects containing image data
const images = [
    {src: 'images/Nature1.jpg'},
    {src: 'images/bath.jpeg'},
    {src: 'images/church.jpeg'},
    {src: 'images/foggy.jpeg'},
    {src: 'images/fountain.jpeg'},
    {src: 'images/lion1.jpg'},
    {src: 'images/longstairs.jpeg'},
    {src: 'images/mountain.jpeg'},
    {src: 'images/nightmountain.jpeg'},
    {src: 'images/river.jpeg'},
    {src: 'images/rivercanon.jpeg'},
    {src: 'images/switzerland.jpeg'},
    {src: 'images/TWOBIRDS.jpeg'},
    {src: 'images/vespa.jpeg'},
    {src: 'images/wARNERS.jpeg'},
];

// Get the gallery container
const gallery = document.getElementById('gallery');

// Dynamically add images to the gallery
images.forEach((image) => {
    const imgElement = document.createElement('img');
    imgElement.src = image.src;
    imgElement.alt = image.alt;
    imgElement.dataset.caption = image.caption;
    imgElement.dataset.src = image.src; // Store the source for HD version
    gallery.appendChild(imgElement);
});

// Modal Elements
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const modalCaption = document.getElementById('modal-caption');
const closeButton = document.getElementById('close');

// Event delegation for image clicks in the gallery
gallery.addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {
        const img = event.target;
        modalImage.src = img.dataset.src; // Set the HD image
        modalCaption.textContent = img.dataset.caption; // Set the caption
        modal.style.display = 'flex'; // Show the modal
    }
});

// Close the modal
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside the image
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
