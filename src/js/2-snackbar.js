// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const promise = new Promise((resolve, reject) => {
    const delay = form.elements.delay.value;
    const state = form.elements.state.value;
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(`✅ Fulfilled promise in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise in ${delay}ms`);
      }
    }, delay);
  });

  promise.then(onMakeSuccess).catch(onMakeError);
}

function onMakeSuccess(result) {
  iziToast.success({
    message: result,
    position: 'topRight',
  });
}

function onMakeError(error) {
  iziToast.error({
    message: error,
    position: 'topRight',
  });
}