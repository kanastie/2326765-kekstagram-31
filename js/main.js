import './functions.js';
import {similarPhotoDescription} from './mock-data.js';
import {createUsersPhotosThumbnails} from './users-photos.js';

const usersPhotos = similarPhotoDescription();
createUsersPhotosThumbnails(usersPhotos);

