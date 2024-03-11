import {getRandomInteger} from './util.js';
import {createRandomNumberFromRangeGenerator} from './util.js';
import {getRandomArrayElement} from './util.js';
import {NAMES, DESCRIPTION_LIST, MESSAGE_LIST} from './data.js';

const getRandomCommentId = createRandomNumberFromRangeGenerator(0, 999);
const getRandomAvatarIndex = createRandomNumberFromRangeGenerator(1, 6);
const getRandomPhotoId = createRandomNumberFromRangeGenerator(1, 25);
const getRandomUrlIndex = createRandomNumberFromRangeGenerator(1, 25);
const getRandomLikes = getRandomInteger(15, 200);

const createObjectComment = () => ({
  id: getRandomCommentId(),
  avatar: `img/avatar-${getRandomAvatarIndex()}.svg`,
  message: getRandomArrayElement(MESSAGE_LIST),
  name: getRandomArrayElement(NAMES)
});

const createPhotoDescription = () => ({
  id: getRandomPhotoId(),
  url: `photos/${getRandomUrlIndex()}.jpg`,
  description: getRandomArrayElement(DESCRIPTION_LIST),
  likes: [getRandomLikes],
  comments: Array.from({length: getRandomInteger(0, 30)}, createObjectComment)
});

const similarPhotoDescription = () => Array.from({length: 25}, createPhotoDescription);

export {similarPhotoDescription};
