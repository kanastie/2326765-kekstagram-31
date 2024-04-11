const EFFECTS = {
  none: {
    range: {
      min: 0,
      max: 1,
    },
    start: 100,
    step: 1,
  },

  chrome: {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
  },

  sepia: {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
  },

  marvin: {
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step: 1,
  },

  phobos: {
    range: {
      min: 0,
      max: 3,
    },
    start: 3,
    step: 0.1,
  },

  heat: {
    range: {
      min: 0,
      max: 3,
    },
    start: 3,
    step: 0.1,
  },
};

const PREVIEWS_STYLE = {
  none: 'none',
  chrome: 'grayscale',
  sepia: 'sepia',
  marvin: 'invert',
  phobos: 'blur',
  heat: 'brightness',
};

const DEFAULT = {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
};

const uploadWrapper = document.querySelector('.img-upload__wrapper');
const sliderElement = uploadWrapper.querySelector('.effect-level__slider');
const effectValueElement = uploadWrapper.querySelector('.effect-level__value');
const sliderElementContainer = uploadWrapper.querySelector('.img-upload__effect-level');
const imgPreview = uploadWrapper.querySelector('.img-upload__preview > img');


let currentEffect = EFFECTS.origin;

noUiSlider.create(sliderElement, DEFAULT);

const addCurrentFilter = (el) => {

  sliderElement.noUiSlider.on('update', () => {
    const currentSliderValue = sliderElement.noUiSlider.get();
    effectValueElement.value = currentSliderValue;
    effectValueElement.setAttribute('value', effectValueElement.value);

    const addPreviewStyle = () => {
      if (el === 'marvin') {
        return `${PREVIEWS_STYLE[el]}(${currentSliderValue}%)`;
      } else if (el === 'phobos') {
        return `${PREVIEWS_STYLE[el]}(${currentSliderValue}px)`;
      } else if (el === 'none') {
        return 'none';
      } else {
        return `${PREVIEWS_STYLE[el]}(${currentSliderValue})`;
      }
    };

    const addFilterToPreview = () => {
      imgPreview.style.filter = addPreviewStyle(PREVIEWS_STYLE[el]);
    };
    addFilterToPreview();

  });
};

const updateSliderOptions = (item) => {
  sliderElement.noUiSlider.updateOptions(EFFECTS[item]);
};

const showSlider = () => {
  sliderElement.classList.remove('hidden');
  sliderElementContainer.classList.remove('hidden');
};

const hideSlider = () => {
  sliderElement.classList.add('hidden');
  sliderElementContainer.classList.add('hidden');
};

const onEffectChange = (evt) => {
  currentEffect = evt.target.value;
  switch(currentEffect) {
    case 'none':
      addCurrentFilter('none');
      hideSlider();
      break;
    case 'chrome':
      addCurrentFilter('chrome');
      updateSliderOptions('chrome');
      showSlider();
      break;
    case 'sepia':
      addCurrentFilter('sepia');
      updateSliderOptions('sepia');
      showSlider();
      break;
    case 'marvin':
      addCurrentFilter('marvin');
      updateSliderOptions('marvin');
      showSlider();
      break;
    case 'phobos':
      addCurrentFilter('phobos');
      updateSliderOptions('phobos');
      showSlider();
      break;
    case 'heat':
      addCurrentFilter('heat');
      updateSliderOptions('heat');
      showSlider();
      break;
  }
};

const clearFilter = () => {
  imgPreview.style.filter = 'none';
  currentEffect = EFFECTS.origin;
  effectValueElement.value = 'none';
};

export {hideSlider, clearFilter, onEffectChange};
