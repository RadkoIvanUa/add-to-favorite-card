function createMarkup(arr) {
  let markup = arr.map(
    ({ id, name, description, img, price }) => ` 
    <li class = 'js-card' data-id = "${id}">
        <img src="${img}" alt="${name}" width = '300' />
        <h2>${name}</h2>
        <p>${price} Кредитів</p>
        <a href="#">See more informstion</a>
        <button class="js-favorite" type="button" >Add to favorite</button>
        <button class="js-basket" >Add to basket</button>
        <button class="js-remove" >Remove from favorite</button>
    </li>`
  );

  return markup;
}

function createFavoriteMarkup(arr) {
  let markup = arr.map(
    ({ id, name, description, img, price }) => ` 
    <li class = 'js-card' data-id = "${id}">
        <img src="${img}" alt="${name}" width = '300' />
        <h2>${name}</h2>
        <p>${price} Кредитів</p>
        <a href="#">See more informstion</a>
        <button class="js-basket" >Add to basket</button>
        <button class="js-remove" >Remove from favorite</button>
    </li>`
  );

  return markup;
}

export { createMarkup, createFavoriteMarkup };
