// после каждой очистки делает на 1блок дивов больше
const inputEl = document.querySelector('input');
const btnRenderEl = document.querySelector('button[data-action="render"]');
const btnDestroyEl = document.querySelector('button[data-action="destroy"]');
const boxesEl = document.querySelector('#boxes');

let amount;
inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(e) {
  amount = e.currentTarget.value;
  btnRenderEl.addEventListener('click', onBtnRenderElClick.bind(amount));
}

function onBtnRenderElClick() {
  const divArr = [];
  let sideLength = 30;

  for (let i = 1; i <= amount; i += 1) {
    const divEl = document.createElement('div');
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    divEl.style.backgroundColor = `#${r.toString(16)}${g.toString(
      16,
    )}${b.toString(16)}`;
    divEl.style.width = `${sideLength * i}px`;
    divEl.style.height = `${sideLength * i}px`;
    // sideLength += 30;
    divArr.push(divEl);
  }
  boxesEl.append(...divArr);
  btnDestroyEl.addEventListener('click', onBtnDestroyElClick);
}

function onBtnDestroyElClick() {
  boxesEl.innerHTML = '';
}
