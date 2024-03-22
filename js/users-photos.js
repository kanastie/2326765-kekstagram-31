import {similarPhotoDescription} from './mock-data.js';

const usersPhotosTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');

const usersPhotos = similarPhotoDescription();

const createThumbnail = ({id, url, description, likes, comments}) => {
  const thumbnail = usersPhotosTemplate.cloneNode(true);

  const image = thumbnail.querySelector('.picture__img');
  thumbnail.dataset.pictureId = id;

  image.src = url;
  image.alt = description;

  thumbnail.querySelector('.picture__likes').textContent = likes;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;

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
