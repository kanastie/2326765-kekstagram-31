import {isEscapeKey} from './util.js';

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

  function close () {
    document.removeEventListener('keydown', onDocumentKeydown);
    addField.classList.add('hidden');
  }

  document.addEventListener('keydown', onDocumentKeydown);

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

  function close () {
    document.removeEventListener('keydown', onDocumentKeydown);
    addField.classList.add('hidden');
  }

  document.addEventListener('keydown', onDocumentKeydown);

  const button = document.querySelector('.error__button');
  button.addEventListener('click', close);
};

export {showDataAlert, showSuccess, showAlert};
