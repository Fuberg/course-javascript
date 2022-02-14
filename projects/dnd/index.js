/* Задание со звездочкой */

/*
 Создайте страницу с кнопкой.
 При нажатии на кнопку должен создаваться div со случайными размерами, цветом и позицией на экране
 Необходимо предоставить возможность перетаскивать созданные div при помощи drag and drop
 Запрещено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */

/*
 homeworkContainer - это контейнер для всех ваших домашних заданий
 Если вы создаете новые html-элементы и добавляете их на страницу, то добавляйте их только в этот контейнер

 Пример:
   const newDiv = document.createElement('div');
   homeworkContainer.appendChild(newDiv);
 */
import './dnd.html';

const homeworkContainer = document.querySelector('#app');

let currentDrag;
let startX = 0;
let startY = 0;

function getRandomInt(max, min = 0) {
  let result = Math.floor(Math.random() * max)
  return (result < min) ? min : result;
}

document.addEventListener('mousemove', (e) => {
  if (currentDrag) { 
    currentDrag.style.top = e.clientY - startY + "px";
    currentDrag.style.left = e.clientX - startX + "px";
  }
});

export function createDiv() {
  let newDiv = document.createElement('div');
  newDiv.classList.add('draggable-div');
  newDiv.style.left = `${getRandomInt(1000, 10)}px`;
  newDiv.style.top = `${getRandomInt(1000, 10)}px`;
  newDiv.style.width = `${getRandomInt(100, 10)}px`;
  newDiv.style.height = `${getRandomInt(100, 10)}px`;
  newDiv.style.backgroundColor = `rgb(${getRandomInt(256)}, ${getRandomInt(256)}, ${getRandomInt(256)})`;

  newDiv.addEventListener('mousedown', (e) => { 
    currentDrag = newDiv;
    startX = e.offsetX;
    startY = e.offsetY;
  });

  newDiv.addEventListener('mouseup', (e) => {currentDrag = false;});

  return newDiv;
}

const addDivButton = homeworkContainer.querySelector('#addDiv');

addDivButton.addEventListener('click', function () {
  const div = createDiv();
  homeworkContainer.appendChild(div);
});


