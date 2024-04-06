import {createUsersPhotosThumbnails} from './users-photos.js';

const Filters = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed',
};

const RANDOM_PICTURES_AMOUNT = 10;

const ACTIVE_BUTTON_CLASS = 'img-filters__button--active';

let currentFilter = 'filter-default';
const filterElement = document.querySelector('.img-filters');

const randomSort = () => 0.5 - Math.random();

const sortByComments = (a, b) => b.comments.length - a.comments.length;


const onFilterClick = (evt) => {
  const targetButton = evt.target;
  const activeButton = filterElement.querySelector(`.${ACTIVE_BUTTON_CLASS}`);

  if (!targetButton.matches('button')) {
    return;
  }

  if (targetButton === activeButton) {
    return;
  }
  activeButton.classList.remove(ACTIVE_BUTTON_CLASS);
  targetButton.classList.add(ACTIVE_BUTTON_CLASS);
  currentFilter = targetButton.getAttribute('id');

  applyFilter();
};


function applyFilter (filter, data) {

  const copyArray = data.slice();

  // switch (evt.target.id)
  switch (filter) {
    case Filters.DEFAULT:
      return data;

    case Filters.RANDOM:
      copyArray.sort(randomSort).slice(0, RANDOM_PICTURES_AMOUNT);
      break;

    case Filters.DISCUSSED:
      copyArray.sort(sortByComments);
      break;
  }

};

// const picture = document.querySelectorAll('.picture');
// const filterButton = document.querySelectorAll('.img-filters__button');

// const removeThumbnails = () => {
//   picture.forEach((pic) => pic.remove());
// };

const changeFilter = (photos) => {
  filterElement.classList.remove('img-filters--inactive');
  filterElement.addEventListener('click', onFilterClick);

};

export {changeFilter};
