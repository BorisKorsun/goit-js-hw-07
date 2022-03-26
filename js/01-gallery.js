import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
    galleryRef: document.querySelector('.gallery')
}

function createGalleryList(array) {
    return array
    .map(({ preview, original, description }) => {
        const div = document.createElement('div');
        div.classList.add('gallery__item');

        const link = document.createElement('a');
        link.classList.add('gallery__link');
        link.href = original;
        div.appendChild(link);

        const image = document.createElement('img');
        image.classList.add('gallery__image');
        image.src = preview;
        image.dataset.source = original;
        image.alt = description;
        link.appendChild(image);

        refs.galleryRef.appendChild(div)
    })
};

createGalleryList(galleryItems);

refs.galleryRef.addEventListener('click', onGalleryImageClick)

function onGalleryImageClick(e) {
    e.preventDefault()

    const image = e.target

    if (image.nodeName !== 'IMG') {
        return
    }
    console.log(image.dataset.source)
    console.log('function completed')
};