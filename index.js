
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
    item.style.cssText = `padding: 10px;`;
    btnDone.classList.add(list__button, list__button__done);
    btnDone.innerHTML = `<input type="checkbox">`;
    const span = document.createElement('span');
    span.style.cssText = `margin: 3px;`;
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
    });

    btnDone.addEventListener('click', function () {
        span.classList.toggle('strike');
    });
});


