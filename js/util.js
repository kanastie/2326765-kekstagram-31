const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomNumberFromRange = (min, max) => {
  const previousValues = [];

  return function() {
    let currentValue = getRandomInteger(min, max);

    if (previousValues.length >= (max - min + 1)) {
      return null;
    }

    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }

    previousValues.push(currentValue);
    return currentValue;
  };
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const isEscapeKey = (evt) => evt.key === 'Escape';

const ALERT_SHOW_TIME = 5000;
const showDataAlert = () => {
  const alertContainer = document.querySelector('#data-error').content;
  const content = alertContainer.querySelector('.data-error');
  const clone = content.cloneNode(true);
  const fragment = document.createDocumentFragment();
  const addField = fragment.appendChild(clone);

  document.body.appendChild(addField);

  setTimeout(() => addField.remove(), ALERT_SHOW_TIME);
};

const showSuccess = () => {
  const successContainer = document.querySelector('#success').content;
  const content = successContainer.querySelector('.success');
  const clone = content.cloneNode(true);
  const fragment = document.createDocumentFragment();
  const addField = fragment.appendChild(clone);

  document.body.appendChild(addField);

  const onDocumentKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      close();
    }
  };
  document.addEventListener('keydown', onDocumentKeydown);
  function close () {
    document.removeEventListener('keydown', onDocumentKeydown);
    addField.classList.add('hidden');

  }

  const button = document.querySelector('.success__button');
  button.addEventListener('click', close);
};

const showAlert = () => {
  const alertContainer = document.querySelector('#error').content;
  const content = alertContainer.querySelector('.error');
  const clone = content.cloneNode(true);
  const fragment = document.createDocumentFragment();
  const addField = fragment.appendChild(clone);

  document.body.appendChild(addField);

  const onDocumentKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      close();
    }
  };
  document.addEventListener('keydown', onDocumentKeydown);
  function close () {
    document.removeEventListener('keydown', onDocumentKeydown);
    addField.classList.add('hidden');

  }

  const button = document.querySelector('.error__button');
  button.addEventListener('click', close);
};

export {getRandomInteger};
export {getRandomNumberFromRange};
export {getRandomArrayElement};
export {isEscapeKey};
export {showDataAlert, showSuccess, showAlert};
