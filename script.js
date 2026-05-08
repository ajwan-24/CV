document.addEventListener('DOMContentLoaded', () => {
    const headers = document.querySelectorAll('h2');
    headers.forEach(header => {
        header.addEventListener('mouseover', () => {
            header.style.color = '#0056b3';
        });
        header.addEventListener('mouseout', () => {
            header.style.color = '#002347';
        });
    });

    const images = document.querySelectorAll('.cert-grid img');
    images.forEach(img => {
        img.addEventListener('click', () => {
            img.style.transform = img.style.transform === 'scale(1.5)' ? 'scale(1)' : 'scale(1.5)';
            img.style.zIndex = img.style.transform === 'scale(1.5)' ? '10' : '1';
            img.style.cursor = 'zoom-out';
        });
    });
});