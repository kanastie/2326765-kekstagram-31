import './functions.js';
import {similarPhotoDescription} from './mock-data.js';
import {createUsersPhotosThumbnails} from './users-photos.js';
import './create-full-photo.js';

const photos = similarPhotoDescription();
createUsersPhotosThumbnails(photos);
