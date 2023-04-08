import { createModal } from './helpers/create-modal';
import { createFavoriteMarkup } from './helpers/create-markup';
import { common } from './helpers/common';
import { createMarkup } from './helpers/create-markup';
import { instruments } from './instruments-for-markup';
import { removeFromFavorite } from './helpers/remove-from-favorite';

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

  removeFromFavorite(evt.target, inFavorite, favoriteArr, productId);
  favoriteList.innerHTML = createFavoriteMarkup(favoriteArr);
}
