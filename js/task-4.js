const counter = {
  value: 0,
  increment() {
    this.value += 1;
    valueEl.textContent = counter.value;
  },
  decrement() {
    this.value -= 1;
    valueEl.textContent = counter.value;
  },
};

const incrementEl = document.querySelector('button:last-child');
const decrementEl = document.querySelector('button:first-child');
const valueEl = document.querySelector('#value');

incrementEl.addEventListener('click', () => counter.increment());
decrementEl.addEventListener('click', () => counter.decrement());
