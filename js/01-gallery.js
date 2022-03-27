import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
    galleryRef: document.querySelector('.gallery'),
};

function createGalleryList(arr) {
    return arr
    .map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                    />
                </a>
        </div>
        `;
    }).join('');
};

const galleryMarkup = createGalleryList(galleryItems);

refs.galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);

refs.galleryRef.addEventListener('click', onGalleryImageClick);

function onGalleryImageClick(e) {
    e.preventDefault()


    const image = e.target;
    
    if(image.nodeName !== 'IMG') {
        return;
    };

    const modal = basicLightbox.create(`
        <img src="${image.dataset.source}" width="800" height="600">
    `);

    modal.show();
    console.log('function completed');
};


// function createGalleryList(array) {
//     return array
//     .map(({ preview, original, description }) => {
//         const div = document.createElement('div');
//         div.classList.add('gallery__item');

//         const link = document.createElement('a');
//         link.classList.add('gallery__link');
//         link.href = original;
//         div.appendChild(link);

//         const image = document.createElement('img');
//         image.classList.add('gallery__image');
//         image.src = preview;
//         image.dataset.source = original;
//         image.alt = description;
//         link.appendChild(image);

//         refs.galleryRef.appendChild(div)
//     })
// };





