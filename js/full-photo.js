import {isEscapeKey} from './util.js';
// import { addCommentsList } from './comments.js';

const usersPhotosContainer = document.querySelector('.pictures');
const modalBigPicture = document.querySelector('.big-picture');


const commentsContainer = modalBigPicture.querySelector('.social__comments');
const commentTemplate = modalBigPicture.querySelector('.social__comment');

const socialCommentsCount = modalBigPicture.querySelector('.social__comment-count');
const commentsLoader = modalBigPicture.querySelector('.comments-loader');
const body = document.querySelector('body');
const modalCloseButton = modalBigPicture.querySelector('.big-picture__cancel');


const addCommentsList = (array, id) => {
  const currentComment = array.find((el) => el.id === Number(id));
  commentsContainer.innerHTML = '';

  currentComment.comments.forEach(({avatar, name, message}) => {
    const commentItem = commentTemplate.cloneNode(true);

    const nick = commentItem.querySelector('.social__picture');

    nick.src = avatar;
    nick.alt = name;
    commentItem.querySelector('.social__text').textContent = message;

    commentsContainer.appendChild(commentItem);
  });

};


// создаёт большие модальные картинки
const f = (array) => {
  usersPhotosContainer.addEventListener('click', (evt) => {
    const targetPicture = evt.target.closest('.picture');
    const pictureId = targetPicture.dataset.pictureId;
    // console.log(pictureId);

    const currentPhoto = array.find((el) => el.id === Number(pictureId));

    modalBigPicture.querySelector('.big-picture__img img').src = currentPhoto.url;
    modalBigPicture.querySelector('.likes-count').textContent = currentPhoto.likes;
    modalBigPicture.querySelector('.social__caption').textContent = currentPhoto.description;
    // про комменты total-comments
    // modalBigPicture.querySelector('.social__comment-total-count').textContent = currentPhoto.comments.length;

    addCommentsList(array, pictureId);

    modalBigPicture.classList.remove('hidden');

    socialCommentsCount.classList.add('hidden');
    commentsLoader.classList.add('hidden');

    body.classList.add('modal-open');

  });

};



modalCloseButton.addEventListener('click', () => {
  modalBigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
});

document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    modalBigPicture.classList.add('hidden');
    body.classList.remove('modal-open');
  }
});

export {f};
