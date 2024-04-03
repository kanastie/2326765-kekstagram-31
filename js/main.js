import './functions.js';
// import {createSimilarPhotosDescription} from './mock-data.js';
import {createUsersPhotosThumbnails} from './users-photos.js';
import {renderBigPhoto} from './render-big-photo.js';
import './upload-photo-form.js';
import './validate-form.js';
import './effects-control.js';

// const usersPhotos = createSimilarPhotosDescription();
// createUsersPhotosThumbnails(usersPhotos);
// renderBigPhoto(usersPhotos);

fetch('https://31.javascript.htmlacademy.pro/kekstagram/data')
  .then((response) => response.json())
  .then((usersPhotos) => {
    createUsersPhotosThumbnails(usersPhotos);
    renderBigPhoto(usersPhotos);
  });

