import {isEscapeKey} from './util.js';
import {resetScale, changeScale} from './scale-control.js';
import {hideSlider, clearFilter} from './effects-control.js';
import {resetValidator} from './validate-form.js';

const body = document.querySelector('body');

const uploadForm = body.querySelector('.img-upload__form');
const uploadInput = uploadForm.querySelector('.img-upload__input');
const uploadFormEdit = uploadForm.querySelector('.img-upload__overlay');
const uploadCloseButton = uploadForm.querySelector('.img-upload__cancel');
const hashtagText = uploadForm.querySelector('.text__hashtags');
const descriptionText = uploadForm.querySelector('.text__description');

const isAlertShown = () => Boolean(document.querySelector('.error'));

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt) && !(document.activeElement === hashtagText || document.activeElement === descriptionText) && !isAlertShown()) {
    evt.preventDefault();
    closeForm();
  }
};

const openForm = ()=> {
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);

  uploadFormEdit.classList.remove('hidden');
  hideSlider();
};

function closeForm () {
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);

  uploadForm.reset();
  resetValidator();
  resetScale();
  clearFilter();
  uploadFormEdit.classList.add('hidden');
}

changeScale();

uploadInput.addEventListener('change', () => openForm());

uploadCloseButton.addEventListener('click', () => closeForm());

const onFieldFocusKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
    evt.target.blur();
  }
};

descriptionText.addEventListener('keydown', onFieldFocusKeydown);
hashtagText.addEventListener('keydown', onFieldFocusKeydown);

export {closeForm};
