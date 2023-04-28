// import '../index.html';
// import '../style.css';
// import '../normalize.css';


// контейнер для заголовка
const titleContainer = document.createElement('div');
titleContainer.classList.add('title-container');

const body = document.querySelector('body');
body.prepend(titleContainer); 


// заголовок h1
const titleText = document.createElement('h1');
titleText.classList.add('title-text');
console.log(body);
// текст для заголовка
titleText.textContent = 'Virtual Keyboard';

// добавляю заголовок в контейнер
titleContainer.appendChild(titleText);



// textarea
const textArea = document.createElement('textarea');
textArea.classList.add('textarea-field');
body.append(textArea); 

// // Создаем заголовок клавиатуры

// const titleContainer = document.createElement('div');
// titleContainer.classList.add('titleContainer');

// const title = document.createComment('title');
// title.classList.add('title');
// keyElement.textContent = Virtual Keyboard;
// titleContainer.appendChild(title);
// body.appendChild(titleContainer);

// keyElement.setAttribute('type', 'button');
//     keyElement.classList.add('key');
//     keyElement.textContent = key;
//     keysContainer.appendChild(keyElement);

// // const titleContainer = document.createElement('div');
// // titleContainer.classList.add('titleContainer');

// // const title = document.createComment('title');
// // title.classList.add('title');

// // let titleText = 'Virtual Keyboard';
// // title.appendChild(titleText);
// // titleContainer.appendChild(title);

// // document.title = ('Vitrual Keyboard');
// const keyboard = document.createElement('div');
// keyboard.classList.add('keyboard');

// const keysContainer = document.createElement('div');
// keysContainer.classList.add('keys');
// keyboard.appendChild(keysContainer);

// const keys = [
//     '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 
//     'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 
//     'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 
//     'z', 'x', 'c', 'v', 'b', 'n', 'm'
// ];


  document.addEventListener("keydown", (event) => {
    console.log(event);
    console.log("event.code", event.code); // this is my solution!!!
    console.log("event.key", event.key);
    console.log(event.getModifierState("Shift", "NumLock")); // true
  });