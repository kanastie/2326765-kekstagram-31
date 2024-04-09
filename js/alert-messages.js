import {isEscapeKey} from './util.js';

const ALERT_SHOW_TIME = 5000;

let addedField = null;

const showNotification = (type) => {

  const alertContainer = document.querySelector(`#${type}`).content;
  const content = alertContainer.querySelector(`.${type}`);
  const clone = content.cloneNode(true);
  const fragment = document.createDocumentFragment();
  addedField = fragment.appendChild(clone);

  document.body.appendChild(addedField);

  return addedField;
};

const showDataAlert = () => {

  addedField = showNotification('data-error');

  document.body.appendChild(addedField);

  const alert = addedField;

  setTimeout(() => {
    alert.remove();
  }, ALERT_SHOW_TIME);

};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeNotification();
  }
};

const onDocumentClick = (evt) => {
  if (!evt.target.closest('div.success__inner, div.error__inner')) {
    closeNotification();
  }
};

function closeNotification () {
  const alertMessage = document.querySelector('.success, .error');
  alertMessage.remove();
  document.removeEventListener('keydown', onDocumentKeydown);
  document.removeEventListener('click', onDocumentClick);
  document.removeEventListener('click', () => closeNotification());
  document.removeEventListener('keydown', () => closeNotification());
}

const showSuccess = () => {

  addedField = showNotification('success');

  document.body.appendChild(addedField);

  document.addEventListener('keydown', onDocumentKeydown);
  document.querySelector('.success__button').addEventListener('click', () => closeNotification());
  document.addEventListener('click', onDocumentClick);
};

const showAlert = () => {

  addedField = showNotification('error');

  document.body.appendChild(addedField);

  document.addEventListener('keydown', onDocumentKeydown);
  document.querySelector('.error__button').addEventListener('click', () => closeNotification());
  document.addEventListener('click', onDocumentClick);
};

const showFileError = (errMessage) => {

  addedField = showNotification('data-error');

  document.body.appendChild(addedField);

  if (errMessage) {
    addedField.textContent = errMessage;
  }
  const alert = addedField;

  setTimeout(() => {
    alert.remove();
  }, ALERT_SHOW_TIME);

};

export {showDataAlert, showSuccess, showAlert, showFileError};

