document.addEventListener('DOMContentLoaded', function () {
    let currentImageIndex = 0;
    const images = document.querySelectorAll('.banner img');
    const leftButton = document.querySelector('.banner-button-left');
    const rightButton = document.querySelector('.banner-button-right');

    function showImage(index) {
        images.forEach((image, i) => {
            if (i === index) {
                image.style.display = 'block';
            } else {
                image.style.display = 'none';
            }
        });
    }

    function scrollBanner(direction) {
        currentImageIndex += direction;
        if (currentImageIndex >= images.length) {
            currentImageIndex = 0;
        } else if (currentImageIndex < 0) {
            currentImageIndex = images.length - 1;
        }
        showImage(currentImageIndex);
    }

    leftButton.addEventListener('click', function () {
        scrollBanner(-1);
    });

    rightButton.addEventListener('click', function () {
        scrollBanner(1);
    });

    showImage(currentImageIndex);

    // Add automatic slideshow with 5-second interval
    setInterval(function () {
        scrollBanner(1);
    }, 5000);
});

// Открыть корзину по клику на кнопку
document.getElementById("openCartButton").addEventListener("click", function() {
    document.getElementById("cartModal").style.display = "block";
});

// Закрыть корзину при клике на крестик
document.getElementsByClassName("close")[0].addEventListener("click", function() {
    document.getElementById("cartModal").style.display = "none";
});
