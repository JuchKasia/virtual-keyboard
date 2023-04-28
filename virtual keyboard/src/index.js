// import '../index.html';
// import '../style.css';
// import '../normalize.css';


// main container
const mainContainer = document.createElement('div');
mainContainer.classList.add('main-container');

const body = document.querySelector('body');
body.prepend(mainContainer); 



// контейнер для заголовка
const titleContainer = document.createElement('div');
titleContainer.classList.add('title-container');
mainContainer.append(titleContainer); 



// заголовок h1
const titleText = document.createElement('h1');
titleText.classList.add('title-text');
console.log(body);
// текст для заголовка
titleText.textContent = 'Virtual Keyboard';

// добавляю заголовок в контейнер
titleContainer.append(titleText);



// textarea
const textArea = document.createElement('textarea');
textArea.classList.add('textarea-field');
mainContainer.append(textArea); 



