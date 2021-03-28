const inputEl = document.querySelector('#validation-input');

const validationInput = function () {
  if (inputEl.value.length === Number(inputEl.dataset.length)) {
    inputEl.classList = 'valid';
  } else {
    inputEl.classList = 'invalid';
  }
};

inputEl.addEventListener('blur', validationInput);
