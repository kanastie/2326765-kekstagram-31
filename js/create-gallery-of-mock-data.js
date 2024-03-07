import {getRandomInteger} from './util.js';
import {createRandomNumberFromRangeGenerator} from './util.js';

const NAMES = [
  'Артём',
  'Екатерина',
  'Саша',
  'Юлия',
  'Иван',
  'Мария',
  'Виктор'
];

const DESCRIPTION_LIST = [
  'Ещё один счастливый день.',
  'Жду лайки!',
  'Помотрите, какая милота.',
  'Комментарии здесь неуместны, просто любуемся.'
];

const MESSAGE_LIST = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];
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
