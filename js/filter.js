import {createUsersPhotosThumbnails} from './users-photos.js';
import {debounce} from './util.js';

const FILTERS = {
  default: 'filter-default',
  random: 'filter-random',
  discussed: 'filter-discussed',
};

const RENDER_DELAY = 500;

const RANDOM_PICTURES_AMOUNT = 10;

const ACTIVE_BUTTON_CLASS = 'img-filters__button--active';

const filterElement = document.querySelector('.img-filters');
const buttons = filterElement.querySelectorAll('.img-filters__button');


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

const createPicturesDebounced = debounce((photos) => {
  clearThumbnails();
  createUsersPhotosThumbnails(photos);
}, RENDER_DELAY);

const changeThumbnails = (data) =>{
  const copyArray = data.slice();

  filterElement.addEventListener('click', (evt) => {
    switch (evt.target.id) {
      case FILTERS.default:
        createPicturesDebounced(data);
        break;
      case FILTERS.random:
        createPicturesDebounced([...copyArray].sort(sortRandomly).slice(0, RANDOM_PICTURES_AMOUNT));
        break;
      case FILTERS.discussed:
        createPicturesDebounced([...copyArray].sort(sortByComments));
        break;
    }
  });
};

const changeFilter = (data) => {
  filterElement.classList.remove('img-filters--inactive');
  switchFilter();
  changeThumbnails(data);
};

export {changeFilter};
