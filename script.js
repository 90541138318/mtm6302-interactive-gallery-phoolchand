// Array of objects containing image data
const images = [
    { src: 'images/Nature 1.jpg', alt: 'Image 1', caption: 'This is image 1' },
    { src: 'images/img2.jpg', alt: 'Image 2', caption: 'This is image 2' },
    { src: 'images/img3.jpg', alt: 'Image 3', caption: 'This is image 3' },
    { src: 'images/img4.jpg', alt: 'Image 4', caption: 'This is image 4' },
    { src: 'images/img5.jpg', alt: 'Image 5', caption: 'This is image 5' },
    { src: 'images/img6.jpg', alt: 'Image 6', caption: 'This is image 6' },
    { src: 'images/img7.jpg', alt: 'Image 7', caption: 'This is image 7' },
    { src: 'images/img8.jpg', alt: 'Image 8', caption: 'This is image 8' },
    { src: 'images/img9.jpg', alt: 'Image 9', caption: 'This is image 9' },
    { src: 'images/img10.jpg', alt: 'Image 10', caption: 'This is image 10' },
    { src: 'images/img11.jpg', alt: 'Image 11', caption: 'This is image 11' },
    { src: 'images/img12.jpg', alt: 'Image 12', caption: 'This is image 12' }
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
