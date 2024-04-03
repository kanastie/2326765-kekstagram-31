import './functions.js';
// import {createSimilarPhotosDescription} from './mock-data.js';
import {createUsersPhotosThumbnails} from './users-photos.js';
import {renderBigPhoto} from './render-big-photo.js';
import './upload-photo-form.js';
import {closeForm} from './upload-photo-form.js';
import {setUserFormSubmit} from './validate-form.js';
import './validate-form.js';
import './effects-control.js';
import {showDataAlert} from './util.js';

// const usersPhotos = createSimilarPhotosDescription();
// createUsersPhotosThumbnails(usersPhotos);
// renderBigPhoto(usersPhotos);


fetch('https://31.javascript.htmlacademy.pro/kekstagram/data')
  .then((response) => {
    if (!response.ok) {
      showDataAlert();
    }
    return response.json();
  })
  .then((usersPhotos) => {
    createUsersPhotosThumbnails(usersPhotos);
    renderBigPhoto(usersPhotos);
  })
  .catch((err) => {
    showDataAlert(err);
  });


setUserFormSubmit(closeForm);
