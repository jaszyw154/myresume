console.log("Gallery Script Loaded Successfully");

let currentImages = [];
let currentIndex = 0;

function openGallery(images, title) {
    console.log("Opening gallery for:", title); // This helps you debug
    currentImages = images;
    currentIndex = 0;

    const modal = document.getElementById("imageModal");
    if (modal) {
        modal.style.display = "block";
        updateModalImage();
        document.getElementById("caption").innerHTML = title;
    } else {
        console.error("Could not find the element with ID 'imageModal'");
    }
}

function updateModalImage() {
    const modalImg = document.getElementById("modalImg");
    if (modalImg && currentImages.length > 0) {
        modalImg.src = currentImages[currentIndex];
    }
}

function changeImage(step) {
    currentIndex += step;
    if (currentIndex >= currentImages.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = currentImages.length - 1;
    updateModalImage();
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

// Close when clicking outside the image
window.onclick = function(event) {
    let modal = document.getElementById("imageModal");
    if (event.target == modal) {
        closeModal();
    }
}

// Keyboard controls
document.addEventListener('keydown', (e) => {
    const modal = document.getElementById("imageModal");
    if (modal && modal.style.display === "block") {
        if (e.key === "ArrowRight") changeImage(1);
        if (e.key === "ArrowLeft") changeImage(-1);
        if (e.key === "Escape") closeModal();
    }
});