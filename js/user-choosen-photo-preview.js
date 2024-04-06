const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const imgUpload = document.querySelector('.img-upload');
const fileChooser = imgUpload.querySelector('.img-upload__start input[type=file]');
const preview = imgUpload.querySelector('.img-upload__preview img');
const previewInEffects = imgUpload.querySelectorAll('.effects__preview');

fileChooser.addEventListener('change', () => {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    const picture = URL.createObjectURL(file);
    preview.src = picture;

    for (let i = 0; i <= previewInEffects.length; i++) {
      previewInEffects[i].style.backgroundImage = `url('${picture}')`;
    }
  }
});
