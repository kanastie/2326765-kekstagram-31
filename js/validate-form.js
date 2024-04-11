import {sendData} from './api.js';
import {showSuccess, showAlert} from './alert-messages.js';
import {onImgUploadLoad} from './user-choosen-photo-preview.js';
import {onEffectChange} from './effects-control.js';

const DESCRIPTION_LENGTH = 140;
const HASHTAGS_LENGTH = 5;

const HASHTAG_PATTERN = /^#[a-zа-яё0-9]{1,19}$/i;

const imgUpload = document.querySelector('.img-upload');
const uploadForm = imgUpload.querySelector('.img-upload__form');
const fileChooser = imgUpload.querySelector('.img-upload__start input[type=file]');
const hashtagText = uploadForm.querySelector('.text__hashtags');
const descriptionText = uploadForm.querySelector('.text__description');
const submitButton = uploadForm.querySelector('.img-upload__submit');
const effectsList = imgUpload.querySelector('.effects__list');

const SUBMIT_BUTTON_TEXT = {
  idle: 'Сохранить',
  sending: 'Сохраняю...',
};

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'has-danger',
  successClass: 'has-success',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'img-upload__field-wrapper--error'
});


const validateDescription = (value) => value.length <= DESCRIPTION_LENGTH;

pristine.addValidator(descriptionText, validateDescription, `Не больше ${DESCRIPTION_LENGTH} символов`);


const checkHashtagPattern = (value) => {
  if (value === '') {
    return true;
  }
  return value.trim().split(/\s+/).every((el) => HASHTAG_PATTERN.test(el));
};

pristine.addValidator(hashtagText, checkHashtagPattern, 'Хэштег должен начинаться с # и состоять только из букв или цифр');


const checkDuplicateHashtag = (value) => {
  if (value === '') {
    return true;
  }

  const array = value.toLowerCase().trim().split(/\s+/);
  const a = new Set(array);

  if (a.size === value.trim().split(/\s+/).length) {
    return true;
  }
};

pristine.addValidator(hashtagText, checkDuplicateHashtag, 'Хэштеги не должны повторяться');


const checkHashtagLength = (value) => value.toLowerCase().trim().split(/\s+/).length <= HASHTAGS_LENGTH;

pristine.addValidator(hashtagText, checkHashtagLength, `Не больше ${HASHTAGS_LENGTH} хэштегов`);


const resetValidator = () => pristine.reset();

const blockSumbitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = SUBMIT_BUTTON_TEXT.sending;
};

const unblockSumbitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = SUBMIT_BUTTON_TEXT.idle;
};

fileChooser.addEventListener('change', onImgUploadLoad);

const setUserFormSubmit = (onSuccess) => {
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();

    if (isValid) {
      const formData = new FormData(evt.target);
      blockSumbitButton();

      sendData(
        formData,
        () => {
          showAlert();
        },
        () => {
          onSuccess();
          showSuccess();
        },
        () => {
          unblockSumbitButton();
        },
      );
    }
  });
};

effectsList.addEventListener('change', onEffectChange);

export {resetValidator, setUserFormSubmit};
