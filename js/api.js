const BASE_URL = 'https://31.javascript.htmlacademy.pro/kekstagram';

const ROUTE = {
  getData: '/data',
  sendData: '/',
};

const getData = (onSuccess, onFail) => {
  fetch(`${BASE_URL}${ROUTE.getData}`)
    .then((response) => {
      if (!response.ok) {
        onFail();
      }
      return response.json();
    })
    .then((data) => {
      onSuccess(data);
    })
    .catch(() => onFail());
};

const sendData = (body, onFail, onSuccess, onFinally) => {
  fetch(`${BASE_URL}${ROUTE.sendData}`,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (!response.ok) {
        onFail();
      } else {
        onSuccess();
      }
    })
    .catch(() => onFail())
    .finally(() => onFinally());
};

export {getData, sendData};
