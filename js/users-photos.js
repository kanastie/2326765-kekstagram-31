import {similarPhotoDescription} from './mock-data.js';

const usersPhotosTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');

const usersPhotos = similarPhotoDescription();

const createThumbnail = (photo) => {
  const thumbnail = usersPhotosTemplate.cloneNode(true);

  const image = thumbnail.querySelector('.picture__img');

  image.src = photo.url;
  image.alt = photo.description;

  thumbnail.querySelector('.picture__likes').textContent = photo.likes;
  thumbnail.querySelector('.picture__comments').textContent = photo.comments.length;

  return thumbnail;
};

const picturesListFragment = document.createDocumentFragment();

const createUsersPhotosThumbnails = () => {
  usersPhotos.forEach((photo) => {
    const thumbnailElement = createThumbnail(photo);
    picturesListFragment.appendChild(thumbnailElement);
  });

  picturesContainer.appendChild(picturesListFragment);
};

export {createUsersPhotosThumbnails};
