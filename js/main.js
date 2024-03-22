import './functions.js';
import {similarPhotoDescription} from './mock-data.js';
import {createUsersPhotosThumbnails} from './users-photos.js';
import {renderBigPhoto} from './render-full-photo.js';

const usersPhotos = similarPhotoDescription();
createUsersPhotosThumbnails(usersPhotos);
renderBigPhoto(usersPhotos);
