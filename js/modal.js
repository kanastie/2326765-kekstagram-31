import {isEscapeKey} from './util.js';

const body = document.querySelector('body');
const modalBigPicture = body.querySelector('.big-picture');
const commentsContainer = modalBigPicture.querySelector('.social__comments');
const modalCloseButton = modalBigPicture.querySelector('.big-picture__cancel');

const uploadForm = body.querySelector('.img-upload__form');
const uploadInput = uploadForm.querySelector('.img-upload__input');
const uploadFormEdit = uploadForm.querySelector('.img-upload__overlay');
const uploadCloseButton = uploadForm.querySelector('.img-upload__cancel');
const hashtagText = uploadForm.querySelector('.text__hashtags');
const descriptionText = uploadForm.querySelector('.text__description');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
};

function commonForModal () {
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
}

function forModalPicture () {
  modalBigPicture.classList.remove('hidden');
}

function forModalForm () {
  uploadFormEdit.classList.remove('hidden');
}

function openModalPicture () {
  commonForModal();
  forModalPicture();
}

function openModalForm () {
  commonForModal();
  forModalForm();
}

function closeModal () {

  uploadFormEdit.classList.add('hidden');
  modalBigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  commentsContainer.innerHTML = '';

  document.removeEventListener('keydown', onDocumentKeydown);

  uploadInput.value = '';
  hashtagText.value = '';
  descriptionText.value = '';
}

modalCloseButton.addEventListener('click', closeModal);

uploadInput.addEventListener('click', openModalForm);

uploadCloseButton.addEventListener('click', closeModal);

export {openModalPicture};
