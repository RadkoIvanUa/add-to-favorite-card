import * as basicLightbox from 'basiclightbox';
import '../../../node_modules/basiclightbox/dist/basicLightbox.min.css';

function createModal({ img, description, name }) {
  const instance = basicLightbox.create(
    `
    <div class="modal js-modal">
      <img src="${img}" alt="${name}" width="200" />
      <h2>${name}</h2>
      <p>${description}</p>
        <button class="js-basket btn">Додати в корзину</button>
    </div>
    `,
    {
      onShow: () => document.addEventListener('keydown', onKeyPress),
      onClose: () => document.removeEventListener('keydown', onKeyPress),
    }
  );

  instance.show();
  function onKeyPress(evt) {
    if (evt.code === 'Escape') {
      instance.close();
    }
  }
}

export { createModal };
