const rateButtons = document.querySelectorAll('.rate-btn');
const sumbitBtn = document.getElementById('submit-btn');
const blocks = document.querySelectorAll('.block');
const rateText = document.getElementById('rate-text');

let rate;
let isRated;

// выбор оценки - rating choise
rateButtons.forEach((btn) => {
    btn.addEventListener(('click'), (event) => {
        if (btn.classList.contains('active')) {
            btn.classList.remove('active');
            isRated = false;
        } else {
            rateButtons.forEach((child) => {
                child.classList.remove('active');
            });
            btn.classList.add('active');
            isRated = true;
            rate = btn.textContent;
        }
        console.log(isRated);
    });
});

let j = 0;
// переключение окна + отображение оценки
// переключение окна реализовал путем четности 
blocks.forEach((block) => {
    sumbitBtn.addEventListener('click', () => {
        if (isRated) {
            if (j % 2 == 0) {
                block.classList.add('disabled');
                j++;
            } else {
                rateText.innerHTML = `You selected ${rate} out of 5`;
                block.classList.remove('disabled');
            }
        }

    });
});

// АНИМАЦИЯ РАССКРЫТИЯ ТЕКСТА
// АНИМАЦИЯ РАССКРЫТИЯ ТЕКСТА
// АНИМАЦИЯ РАССКРЫТИЯ ТЕКСТА
const wrapper = document.querySelector('.expandable-wrapper');
const content = document.getElementById('textContent');
const btn = document.getElementById('expandBtn');
const btnText = btn.querySelector('.btn-text');

// Сохраняем изначальную высоту 
const initialHeight = '270px'; 

btn.addEventListener('click', () => {
  // Переключаем класс состояния
  const isOpen = wrapper.classList.toggle('is-open');

  if (isOpen) {
    // Если открываем: задаем высоту равную реальному размеру контента
    content.style.maxHeight = content.scrollHeight + 'px';
    btnText.textContent = 'Свернуть';
  } else {
    // Если закрываем: возвращаем к стартовой высоте
    content.style.maxHeight = initialHeight;
    btnText.textContent = 'Развернуть';
  }
});