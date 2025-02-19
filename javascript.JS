 
function changeImage(direction) {
    const images = document.querySelectorAll(".carousel-images img");
    let currentIndex = Array.from(images).findIndex(img => img.classList.contains("active"));

    images[currentIndex].classList.remove("active");

    currentIndex = (currentIndex + direction + images.length) % images.length;

    images[currentIndex].classList.add("active");
}
