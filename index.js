/* Сделай возможность добавления новых дел в список.

Каждый новый элемент должен добавляться в начало списка.

Используя методы для работы с DOM-узлами тебе необходимо:

создать новый элемент (createElement),
задать ему правильный набор классов,
вложить в него текстовый контент, который будет взят из окна ввода,
добавить в конец узел кнопки (заранее создав его),
добавить созданный элемент в начало списка.
Кнопка в данном релизе нужна только для красоты. Она будет доработана в следующем релизе :)

После добавления элемента окно ввода должно очиститься. */

//const item = document.createElement('div');
const btn = document.querySelector('#btn');
const input = document.querySelector('.list__input');
const item = document.querySelector('.list__item'); 

let list__button = className = 'list__button';
let  list__button__done = className = 'list__button__done';
let  list__button__white = className = 'list__button__white';

btn.addEventListener('click', () => {
    const btnDone = document.createElement('button');
    btnDone.classList.add(list__button, list__button__done);
    btnDone.textContent = '✓';
    const span = document.createElement('span');
    span.className = "list__item__text";
    const btnWhite = document.createElement('button');
    btnWhite.classList.add(list__button, list__button__white);
    btnWhite.textContent = 'x';
    span.append(input.value);
    item.prepend(btnDone, span, btnWhite);
    input.value = '';
});