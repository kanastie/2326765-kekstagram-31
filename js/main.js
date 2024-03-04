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

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getUniqueRandomInteger = (min, max) => {
  const previousValue = [];

  return function() {
    let currentValue = getRandomInteger(min, max);
    if (previousValue.length >= (max - min + 1)) {
      return null;
    }
    while (previousValue.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValue.push(currentValue);
    return currentValue;
  };
};

const createObjectComment = () => {
  const randomIdIndexForComment = getUniqueRandomInteger(0, 999);
  const randomAvatarIndex = getUniqueRandomInteger(1, 6);
  const randomMessage = getRandomInteger(0, MESSAGE_LIST.length - 1);
  const randomName = getRandomInteger(0, NAMES.length - 1);

  return {
    id: randomIdIndexForComment(),
    avatar: `img/avatar-${randomAvatarIndex()}.svg`,
    message: MESSAGE_LIST[randomMessage],
    name: NAMES[randomName]
  };
};

const createPhotoDescription = () => {
  const randomIdIndex = getUniqueRandomInteger(1, 25);
  const randomUrlIndex = getUniqueRandomInteger(1, 25);
  const randomDescription = getRandomInteger(0, DESCRIPTION_LIST.length - 1);
  const randomLikes = getRandomInteger(15, 200);

  return {
    id: randomIdIndex(),
    url: `photos/${randomUrlIndex()}.jpg`,
    description: DESCRIPTION_LIST[randomDescription],
    likes: [randomLikes],
    comments: Array.from({length: getRandomInteger(0, 30)}, createObjectComment)
  };
};

const similarPhotoDescription = Array.from({length: 25}, createPhotoDescription);

similarPhotoDescription();
