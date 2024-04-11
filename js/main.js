import {createUsersPhotosThumbnails} from './users-photos.js';
import {renderBigPhoto} from './render-big-photo.js';
import {closeForm} from './modal-upload-form.js';
import {setUserFormSubmit} from './validate-form.js';
import {getData} from './api.js';
import {showDataAlert} from './alert-messages.js';
import {changeFilter} from './filter.js';

getData(
  (usersPhotos) => {
    createUsersPhotosThumbnails(usersPhotos);
    renderBigPhoto(usersPhotos);
    changeFilter(usersPhotos);
  },
  () => {
    showDataAlert();
  }
);

setUserFormSubmit(closeForm);
