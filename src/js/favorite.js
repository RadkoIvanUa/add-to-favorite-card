import { createModal } from './helpers/create-modal';
import { createFavoriteMarkup } from './helpers/create-markup';
import { common } from './helpers/common';
import { createMarkup } from './helpers/create-markup';
import { instruments } from './instruments-for-markup';

const favoriteList = document.querySelector('.js-favorite-list');

let favoriteArr = JSON.parse(localStorage.getItem(common.FAVORITE_KEY)) ?? [];

favoriteList.innerHTML = createFavoriteMarkup(favoriteArr);

favoriteList.addEventListener('click', onClick);

function onClick(evt) {
  evt.preventDefault();

  const productId = Number(evt.target.closest('.js-card').dataset.id);
  const product = instruments.find(({ id }) => id === productId);

  if (evt.target.nodeName === 'A') {
    createModal(product);
  }
  const inFavorite = favoriteArr.some(({ id }) => id === productId);

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
  favoriteList.innerHTML = createFavoriteMarkup(favoriteArr);
}
