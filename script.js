// Pastikan "Window" menggunakan huruf kecil "window"
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

document.addEventListener("DOMContentLoaded", () => {
    // 1. Logika Penempatan GIF
    const gifs = document.querySelectorAll(".story-gif");
    
    gifs.forEach((gif, i) => {
        gif.style.position = "fixed";
        gif.style.bottom = "10px";
        gif.style.left = `${5 * (i + 1) + 18 * i}%`;
    });

    // 2. Logika Efek Carousel 3D
    const container = document.querySelector(".carousel-container");
    
    if (container) {
        const items = container.querySelectorAll("video, img");
        const total = items.length;
        
        items.forEach((item, i) => {
            const angle = (360 / total) * i;
            item.style.transform = `rotateY(${angle}deg) translateZ(300px)`;
        });
    }
});
