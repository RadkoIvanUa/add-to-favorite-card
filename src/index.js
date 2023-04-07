import { instruments } from './js/instruments-for-markup';
import { createMarkup } from './js/helpers/create-markup';
import { createModal } from './js/helpers/create-modal';
import { common } from './js/helpers/common';

const refs = {
  list: document.querySelector('.js-list'),
};

let favoriteArr = JSON.parse(localStorage.getItem(common.FAVORITE_KEY)) ?? [];

refs.list.innerHTML = createMarkup(instruments);

refs.list.addEventListener('click', onClick);

function onClick(evt) {
  evt.preventDefault();

  const productId = Number(evt.target.closest('.js-card').dataset.id);
  const product = instruments.find(({ id }) => id === productId);

  if (evt.target.nodeName === 'A') {
    createModal(product);
  }

  const inFavorite = favoriteArr.some(({ id }) => id === productId);

  if (evt.target.classList.contains('js-favorite')) {
    if (!inFavorite) {
      favoriteArr.push(product);
    }
    localStorage.setItem(common.FAVORITE_KEY, JSON.stringify(favoriteArr));
  }

  if (evt.target.classList.contains('js-remove')) {
    if (inFavorite) {
      favoriteArr.forEach((el, idx) => {
        if (el.id === productId) {
          favoriteArr.splice(idx, 1);
        }
      });
    }
  }

  localStorage.setItem(common.FAVORITE_KEY, JSON.stringify(favoriteArr));
}
