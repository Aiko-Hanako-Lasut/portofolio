let currentIndex;
let items = document.querySelectorAll('.gallery img, .gallery video');

function openModal(src, alt, type) {
    const modal = document.getElementById('myModal');
    const modalImg = document.getElementById('modalImg');
    const modalVideo = document.getElementById('modalVideo');
    const captionText = document.getElementById('caption');
    
    modal.style.display = "block";
    if (type === 'img') {
        modalImg.style.display = "block";
        modalVideo.style.display = "none";
        modalImg.src = src;
    } else {
        modalImg.style.display = "none";
        modalVideo.style.display = "block";
        modalVideo.src = src;
    }
    captionText.innerHTML = alt;
    currentIndex = Array.from(items).findIndex(item => item.src === src);
}

function closeModal() {
    document.getElementById('myModal').style.display = "none";
}

function changeSlide(n) {
    currentIndex += n;
    if (currentIndex >= items.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = items.length - 1;
    }
    const item = items[currentIndex];
    const type = item.tagName.toLowerCase();
    openModal(item.src, item.alt, type);
}
