document.addEventListener('DOMContentLoaded', () => {
    const pButton = document.getElementById('p-button');
    const imgButton = document.getElementById('img-button');
    const pDiv = document.getElementById('p-div');
    const imgDiv = document.getElementById('img-div');
    const paragraphCounter = document.getElementById('paragraph-counter');
    const imageCounter = document.getElementById('image-counter');

    pButton.addEventListener('click', () => {
        pDiv.style.display = 'block';
        imgDiv.style.display = 'none';

        const newParagraph = document.createElement('p');
        newParagraph.textContent = 'sza rlly my wife fr fr ';
        pDiv.appendChild(newParagraph);

        paragraphCounter.textContent = parseInt(paragraphCounter.textContent) + 1;
    });

    imgButton.addEventListener('click', () => {
        imgDiv.style.display = 'block';
        pDiv.style.display = 'none';

        const newImage = document.createElement('img');
        newImage.src = 'wife.jpg';
        newImage.alt = 'Placeholder Image';
        imgDiv.appendChild(newImage);

        imageCounter.textContent = parseInt(imageCounter.textContent) + 1;
    });
});