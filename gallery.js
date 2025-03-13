let currentIndex = 0;
let images = [];

function showGallery(id) {
    document.getElementById(id).style.display = 'block';
}

function closeGallery(id) {
    document.getElementById(id).style.display = 'none';
}

/* Open Lightbox with Image Preview */
function openLightbox(src) {
    images = Array.from(document.querySelectorAll('.gallery .images img')).map(img => img.src);
    currentIndex = images.indexOf(src);

    document.getElementById('lightbox-img').src = src;
    document.getElementById('lightbox').style.display = 'flex';
}

/* Close Lightbox */
function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

/* Navigate Images in Lightbox */
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById('lightbox-img').src = images[currentIndex];
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    document.getElementById('lightbox-img').src = images[currentIndex];
}
