document.addEventListener('DOMContentLoaded', function() {
    const certificateContainers = document.querySelectorAll('.image-container');

    certificateContainers.forEach(container => {
        container.addEventListener('click', function() {
            this.classList.toggle('fullscreen');
        });
    });
});
