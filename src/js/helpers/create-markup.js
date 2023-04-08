function createMarkup(arr) {
  let markup = arr
    .map(
      ({ id, name, description, img, price }) => ` 
    <li class = 'js-card' data-id = "${id}">
        <img src="${img}" alt="${name}"/>
        <h2>${name}</h2>
        <p>${price} Кредитів</p>
        <a href="#">Детальніше...</a>
        <button class="js-basket btn" >Додати в корзину</button>
        <button class="js-favorite btn" type="button" >Додати в обране</button>
        
    </li>`
    )
    .join('');

  return markup;
}

function createFavoriteMarkup(arr) {
  let markup = arr
    .map(
      ({ id, name, description, img, price }) => ` 
    <li class = 'js-card' data-id = "${id}">
        <img src="${img}" alt="${name}"/>
        <h2>${name}</h2>
        <p>${price} Кредитів</p>
        <a href="#">See more informstion</a>
        <button class="js-basket btn" >Додати в корзину</button>
        <button class="js-remove btn" >Видалити з обраного</button>
    </li>`
    )
    .join('');

  return markup;
}

export { createMarkup, createFavoriteMarkup };
