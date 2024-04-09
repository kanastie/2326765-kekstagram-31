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

const filterElement = document.querySelector('.img-filters');
const buttons = filterElement.querySelectorAll('.img-filters__button');

let copyArray = [];

const sortRandomly = () => 0.5 - Math.random();

const sortByComments = (a, b) => b.comments.length - a.comments.length;

const switchFilter = () => {

  for (let i = 0; i < buttons.length; i++) {
    let currentButton = null;
    currentButton = buttons[i];

    currentButton.addEventListener('click', (evt) => {
      const targetButton = evt.target;
      const activeButton = filterElement.querySelector(`.${ACTIVE_BUTTON_CLASS}`);

      if (targetButton === activeButton) {
        return;
      }
      activeButton.classList.remove(ACTIVE_BUTTON_CLASS);
      targetButton.classList.add(ACTIVE_BUTTON_CLASS);
    });
  }
};

const clearThumbnails = () => {
  const pictures = document.querySelectorAll('.picture');
  pictures.forEach((el) => el.remove());
};

const renderDebouncedPictures = debounce(createUsersPhotosThumbnails, RENDER_DELAY);

const showPicturesDebounced = (data) => {
  clearThumbnails();
  renderDebouncedPictures(data);
};

function onThumbnailsListChanging (evt, data) {
  switch (evt.target.id) {
    case Filters.DEFAULT:
      return showPicturesDebounced(data);
    case Filters.RANDOM:
      showPicturesDebounced(data.sort(sortRandomly).slice(0, RANDOM_PICTURES_AMOUNT));
      break;
    case Filters.DISCUSSED:
      showPicturesDebounced(data.sort(sortByComments));
      break;
  }
}

function changeThumbnailsList (data) {
  copyArray = data.slice();

  filterElement.addEventListener('click', (evt) => {
    onThumbnailsListChanging(evt, copyArray);
  });
}

const changeFilter = (data) => {
  filterElement.classList.remove('img-filters--inactive');
  switchFilter();
  changeThumbnailsList(data);
};

export {changeFilter};
