import './functions.js';
import {similarPhotoDescription} from './mock-data.js';
import {createUsersPhotosThumbnails} from './users-photos.js';
import './full-photo.js';
import {f} from './full-photo.js';

const usersPhotos = similarPhotoDescription();
createUsersPhotosThumbnails(usersPhotos);
f(usersPhotos);
