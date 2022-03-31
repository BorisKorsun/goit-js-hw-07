import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
    galleryRef: document.querySelector('.gallery'),
};

function createGalleryList(arr) {
    return arr
    .map(({ preview, original, description }) => {
        return `
        <li>
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </li>
        `;
    }).join('');
};

const galleryMarkup = createGalleryList(galleryItems);

console.log(galleryMarkup)

refs.galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);

let gallery = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
  });