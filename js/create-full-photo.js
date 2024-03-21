import {isEscapeKey} from './util.js';
// import {createUsersPhotosThumbnails} from './users-photos.js';
// import {similarPhotoDescription} from './mock-data.js';

const modalBigPicture = document.querySelector('.big-picture');
const commentsContainer = modalBigPicture.querySelector('.social__comments');
const commentTemplate = modalBigPicture.querySelector('.social__comment');

const usersPhotosContainer = document.querySelector('.pictures');

const socialCommentsCount = modalBigPicture.querySelector('.social__comment-count');
const commentsLoader = modalBigPicture.querySelector('.comments-loader');
const body = document.querySelector('body');
const modalCloseButton = modalBigPicture.querySelector('.big-picture__cancel');


const f = (photos) => {
  const userPhotoThumbnail = document.querySelectorAll('.picture');
  userPhotoThumbnail.forEach((el) => el.addEventListener('click', (evt) => {
    const pictureId = evt.currentTarget.dataset.pictureId;
    // console.log(pictureId);

    // const currentPhoto = photos.find(({id}) => id === pictureId);
    // console.log(currentPhoto);


    modalBigPicture.classList.remove('hidden');

    socialCommentsCount.classList.add('hidden');
    commentsLoader.classList.add('hidden');

    body.classList.add('modal-open');

    // return currentPhoto;
  }));
  return userPhotoThumbnail;
};



const makeBigImg = (pictureId) => {
  // const currentPhoto = photos.find((photo) => photo.id === id);
  const currentPhoto = photos.find(({id}) => id === pictureId);
  // console.log(currentPhoto);
  // const currentPhoto = (photos, id) => photos.find((item) => item.id === Number(id));



  photos.forEach(() => {
    modalBigPicture.querySelector('.big-picture__img img').src = currentPhoto.url;
    modalBigPicture.querySelector('.likes-count').textContent = currentPhoto.likes;
    modalBigPicture.querySelector('.social__caption').textContent = currentPhoto.description;

    modalBigPicture.querySelector('.social__comment-total-count').textContent = currentPhoto.comments.length;

  });

  const createComment = ({avatar, name, message}) => {
    const commentItem = commentTemplate.cloneNode(true);

    const nick = commentItem.querySelector('.social__picture');

    nick.src = avatar;
    nick.alt = name;
    commentItem.querySelector('.social__text').textContent = message;

    return commentItem;
  };

  const commentsList = (photos) => {
    const commentsListFragment = document.createDocumentFragment();

    photos.comments.forEach((commentElement) => {
      const comment = createComment(commentElement);
      commentsListFragment.appendChild(comment);
    });

    commentsContainer.appendChild(commentsListFragment);
    return commentsContainer;
  };

  // console.log(commentsList);


};


modalCloseButton.addEventListener('click', () => {
  modalBigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
});

document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    modalBigPicture.classList.add('hidden');
  }
});

export {f};
