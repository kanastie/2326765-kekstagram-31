import {createUsersPhotosThumbnails} from './users-photos.js';
import {debounce} from './util.js';

const Filters = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed',
};

const RENDER_DELAY = 500;

const RANDOM_PICTURES_AMOUNT = 10;

const ACTIVE_BUTTON_CLASS = 'img-filters__button--active';

let currentFilter = 'filter-default';
const filterElement = document.querySelector('.img-filters');
const picture = document.querySelector('.picture');

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

const debouncedPictures = debounce(createUsersPhotosThumbnails, RENDER_DELAY);

const clearThumbnails = () => {
  picture.forEach((el) => el.remove());
};

function applyFilter (filter, data) {

  const copyArray = data.slice();

  // switch (evt.target.id)
  switch (filter) {
    case Filters.DEFAULT:
      clearThumbnails();
      return debouncedPictures(data);
    case Filters.RANDOM:
      clearThumbnails();
      copyArray.sort(randomSort).slice(0, RANDOM_PICTURES_AMOUNT);
      debouncedPictures(copyArray);
      break;
    case Filters.DISCUSSED:
      clearThumbnails();
      copyArray.sort(sortByComments);
      debouncedPictures(copyArray);
      break;
  }
}

const changeFilter = () => {
  filterElement.classList.remove('img-filters--inactive');
  filterElement.addEventListener('click', onFilterClick);

};


export {changeFilter};
