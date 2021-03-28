const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listEl = document.querySelector('#ingredients');
// без функций
// const listItemsEl = ingredients.map(element => {
//   const listItemEl = document.createElement('li');
//   listItemEl.textContent = element;
//   return listItemEl;
// });

// c функцией
const createListItems = function (listItemsArray) {
  return listItemsArray.map(element => {
    const listItemEl = document.createElement('li');
    listItemEl.textContent = element;
    return listItemEl;
  });
};
const listItemsEl = createListItems(ingredients);

listEl.prepend(...listItemsEl);
