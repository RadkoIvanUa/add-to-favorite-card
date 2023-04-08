import { common } from './common';

function removeFromFavorite(evtTartget, inFavorite, favoriteArr, productId) {
  if (evtTartget.classList.contains('js-remove')) {
    if (inFavorite) {
      favoriteArr.forEach((el, idx) => {
        if (el.id === productId) {
          favoriteArr.splice(idx, 1);
          evtTartget.textContent = 'Додати в обране';
          evtTartget.classList.remove('js-remove');
        }
      });
    }
  }
  localStorage.setItem(common.FAVORITE_KEY, JSON.stringify(favoriteArr));
}

export { removeFromFavorite };
