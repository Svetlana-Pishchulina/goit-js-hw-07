const categoriesItemsEl = document.querySelectorAll('.item');

// без функций
// console.log(`В списке ${categoriesItemsEl.length} категории.`);

// categoriesItemsEl.forEach(element => {
//   console.log(
//     `категория: ${element.firstElementChild.textContent}
// количество элементов: ${element.lastElementChild.children.length}`,
//   );
// });

// с функциями
const determinesListLength = listItems => {
  console.log(`В списке ${listItems.length} категории.`);
};
determinesListLength(categoriesItemsEl);

const determinesTitleAndElementsAmount = listItems => {
  listItems.forEach(element => {
    console.log(
      `категория: ${element.firstElementChild.textContent}
  количество элементов: ${element.lastElementChild.children.length}`,
    );
  });
};
determinesTitleAndElementsAmount(categoriesItemsEl);
