const uploadWrapper = document.querySelector('.img-upload__wrapper');
const sliderElement = uploadWrapper.querySelector('.effect-level__slider');
const effectValueElement = uploadWrapper.querySelector('.effect-level__value');
const sliderElementContainer = uploadWrapper.querySelector('.img-upload__effect-level');
const imgPreview = uploadWrapper.querySelector('.img-upload__preview');

// const checkedEffect = sliderElement.querySelector('.effects__radio');
const effectsList = uploadWrapper.querySelector('.effects__list');

// пока нужно:
effectValueElement.style.display = 'block';
effectValueElement.style.color = 'black';


const EFFECTS = {
  origin: {},

  chrome: {
    range: {min: 0, max: 1,},
    step: 0.1,
  },

  sepia: {
    range: {min: 0, max: 1,},
    step: 0.1,
  },

  marvin: {
    range: {min: 0, max: 100,},
    step: 1,
  },

  phobos: {
    range: {min: 0, max: 3,},
    step: 0.1,
  },

  heat: {
    range: {min: 0, max: 3,},
    step: 0.1,
  },
};

const PREVIEWS_STYLE = {
  none: 'none',
  chrome: `grayscale(${effectValueElement.value})`,
  sepia: `sepia(${effectValueElement.value})`,
  marvin: `invert(${effectValueElement.value}%)`,
  phobos: `blur(${effectValueElement.value}px)`,
  heat: `brightness(${effectValueElement.value})`,
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

noUiSlider.create(sliderElement, DEFAULT);

sliderElement.noUiSlider.on('update', () => {
  const currentSliderValue = sliderElement.noUiSlider.get();
  effectValueElement.value = currentSliderValue;

});

const addFilterToPreview = (el) => {
  imgPreview.style.filter = PREVIEWS_STYLE[el];
};

const updateSliderOptions = (item) => {
  // нужен сброс к дефолтному значению (100%)
  sliderElement.noUiSlider.updateOptions(EFFECTS[item]);
};

const onEffectChange = (evt) => {
  const effect = evt.target.value;
  switch(effect) {
    case 'none':
      addFilterToPreview('none');
      sliderElement.classList.add('hidden');
      sliderElementContainer.classList.add('hidden');
      break;
    case 'chrome':
      addFilterToPreview('chrome');
      updateSliderOptions('chrome');
      break;
    case 'sepia':
      addFilterToPreview('sepia');
      updateSliderOptions('sepia');
      break;
    case 'marvin':
      addFilterToPreview('marvin');
      updateSliderOptions('marvin');
      break;
    case 'phobos':
      addFilterToPreview('phobos');
      updateSliderOptions('phobos');
      break;
    case 'heat':
      addFilterToPreview('heat');
      updateSliderOptions('heat');
      break;
  }
};


effectsList.addEventListener('change', onEffectChange);
