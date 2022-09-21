
//
const btn = document.querySelector('#btn');
const input = document.querySelector('.list__input');
//const container = document.querySelector('.list__container'); 
const list__container = document.querySelector('.list__container');

let list__button = className = 'list__button';
let  list__button__done = className = 'list__button__done';
let  list__button__white = className = 'list__button__white';


btn.addEventListener('click', () => {
    const btnDone = document.createElement('button');
    const item = document.createElement('div');
    btnDone.classList.add(list__button, list__button__done);
    btnDone.textContent = '✓';
    const span = document.createElement('div');
    item.className = "list__item";
    const btnWhite = document.createElement('button');
    btnWhite.classList.add(list__button, list__button__white);
    btnWhite.textContent = 'x';
    span.append(input.value);
    item.prepend(btnDone, span, btnWhite);
    list__container.prepend(item);
    input.value = '';


    
    btnWhite.addEventListener('click', function (event) {
        const remove = event.target.parentNode.remove();
    })
});



/* Release 2
Добавь к кнопке сразу после создания обработчик события. Обработчик должен удалять нужный элемент списка дел.

В данном релизе тебе поможет знание навигации по DOM-дереву.

Алгоритм удаления элемента будет примерно таким:

узнать на какую именно кнопку кликнули. Для этого в обработчике нужно принять объект события и обратиться к его свойству target.
подняться от узла кнопки до его родителя и удалить его. */