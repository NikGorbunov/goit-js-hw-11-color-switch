import './sass/main.scss';
// 0. Выбирвем боди
const bodyRef = document.querySelector('body');
// 1. Выбирем кнопку старт
const startButtonRef = document.querySelector('[data-start]')
const stopButtonRef = document.querySelector('[data-stop]')
// 2. Вешаем слушателя на кнопку СТАРТ
// 3. создаем переменную, куда будем прибавлять значение интервала
let timerId = null;
// 3. Меняем цвет фона body
startButtonRef.addEventListener("click", () => {
  timerId = setInterval(() => {
    bodyRef.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startButtonRef.disabled = true;
});


stopButtonRef.addEventListener("click", () => {
  clearInterval(timerId);
  startButtonRef.disabled = false;
});
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }


