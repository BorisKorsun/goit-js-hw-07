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

    modalShow(image.dataset.source)
};

function modalShow (src) {
    const modal = basicLightbox.create(`
        <div class="modal">
         <img src="${src}" width="800" height="600">
        </div>
    `);
    modal.show();

    if(image.nodeName === 'IMG') {
        modal.show()
    };
}





