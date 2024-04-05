import {isEscapeKey} from './util.js';

const ALERT_SHOW_TIME = 5000;

let addField = null;

const showSomeAlert = (type) => {

  const alertContainer = document.querySelector(`#${type}`).content;
  const content = alertContainer.querySelector(`.${type}`);
  const clone = content.cloneNode(true);
  const fragment = document.createDocumentFragment();
  addField = fragment.appendChild(clone);

  document.body.appendChild(addField);

  return addField;
};

const showDataAlert = () => {

  addField = showSomeAlert('data-error');

  document.body.appendChild(addField);

  const alert = addField;

  setTimeout(() => {
    alert.remove();
  }, ALERT_SHOW_TIME);

};

const showSuccess = () => {

  addField = showSomeAlert('success');

  document.body.appendChild(addField);

  const alert = addField;

  const onDocumentKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      close();
    }
  };

  function close () {
    document.removeEventListener('keydown', onDocumentKeydown);
    alert.classList.add('hidden');
  }

  document.addEventListener('keydown', onDocumentKeydown);

  document.querySelector('.success__button').addEventListener('click', close);

  // console.log(alert);
  // console.log();

  // return;
};

const showAlert = () => {

  addField = showSomeAlert('error');

  document.body.appendChild(addField);

  const alert = addField;

  const onDocumentKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      close();
    }
  };

  function close () {
    document.removeEventListener('keydown', onDocumentKeydown);
    alert.classList.add('hidden');
  }

  document.addEventListener('keydown', onDocumentKeydown);

  document.querySelector('.error__button').addEventListener('click', close);

  // console.log(alert);
  // console.log(a);

  // return a;
};

// console.log(showAlert);
// console.log(showAlert());

export {showDataAlert, showSuccess, showAlert};
