import { createModal } from './js/helpers/create-modal';
import { instruments } from './js/instruments-for-markup';
import throttle from 'lodash.throttle';

import { createMarkup } from './js/helpers/create-markup';
import { common } from './js/helpers/common';
import { removeFromFavorite } from './js/helpers/remove-from-favorite';
import { addToFavorite } from './js/helpers/add-to-favorite';

const refs = {
  list: document.querySelector('.js-list'),
  input: document.querySelector('.js-input'),
};

let favoriteArr = JSON.parse(localStorage.getItem(common.FAVORITE_KEY)) ?? [];

refs.list.innerHTML = createMarkup(instruments);

const cards = Array.from(document.querySelectorAll('.js-card'));
const cardId = cards.map(card => Number(card.dataset.id));
const favoriteCardsID = favoriteArr.map(({ id }) => id);

for (let i = 0; i < cardId.length; i++) {
  if (favoriteCardsID.includes(cardId[i])) {
    const findedProduct = cards.find(el => Number(el.dataset.id) === cardId[i]);
    findedProduct.lastElementChild.classList.add('js-remove');
    findedProduct.lastElementChild.textContent = 'Видалити з обраного';
  }
}

refs.list.addEventListener('click', onClick);

function onClick(evt) {
  evt.preventDefault();

  const productId = Number(evt.target.closest('.js-card').dataset.id);
  const product = instruments.find(({ id }) => id === productId);

  if (evt.target.nodeName === 'A') {
    createModal(product);
  }

  const inFavorite = favoriteArr.some(({ id }) => id === productId);

  addToFavorite(evt.target, inFavorite, favoriteArr, product);
  removeFromFavorite(evt.target, inFavorite, favoriteArr, productId);
}

refs.input.addEventListener('input', throttle(onInput, 500));

function onInput(e) {
  const filtered = e.target.value.toLowerCase().trim();

  const filteredItems = instruments.filter(({ name }) =>
    name.toLowerCase().includes(filtered)
  );
  refs.list.innerHTML = createMarkup(filteredItems);
}
