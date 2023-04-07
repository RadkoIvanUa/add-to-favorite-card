import * as basicLightbox from 'basiclightbox';
import '../../../node_modules/basiclightbox/dist/basicLightbox.min.css';

function createModal({ img, description, name }) {
  const instance = basicLightbox.create(
    `
    <div class="modal">
      <img src="${img}" alt="${name}" width="200" />
      <h2>${name}</h2>
      <p>${description}</p>
    </div>
    `
  );

  instance.show();
}

export { createModal };
