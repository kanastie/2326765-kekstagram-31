import './functions.js';
import {similarPhotoDescription} from './mock-data.js';
import {createUsersPhotosThumbnails} from './users-photos.js';
import './render-full-photo.js';
import {f} from './render-full-photo.js';

const usersPhotos = similarPhotoDescription();
createUsersPhotosThumbnails(usersPhotos);
f(usersPhotos);
