import { common } from './common';

function addToFavorite(evtTarget, inFavorite, favoriteArr, product) {
  if (evtTarget.classList.contains('js-favorite')) {
    if (!inFavorite) {
      favoriteArr.push(product);
      evtTarget.textContent = 'Видалити з обраного';
      evtTarget.classList.add('js-remove');
    }
    localStorage.setItem(common.FAVORITE_KEY, JSON.stringify(favoriteArr));
  }
}

export { addToFavorite };
