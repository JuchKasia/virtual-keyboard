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



// контейнер для текста описания

const descriptionContainer = document.createElement('div');
descriptionContainer.classList.add('description-container');
mainContainer.append(descriptionContainer); 

// заголовок language
const languageText = document.createElement('p');
languageText.classList.add('language-text');
languageText.textContent = 'Change language: Shift + Alt';
descriptionContainer.append(languageText);

// заголовок windows
const windowsText = document.createElement('p');
windowsText.classList.add('windows-text');
windowsText.textContent = 'Made for Windows';
descriptionContainer.append(windowsText);


// textarea
const textArea = document.createElement('textarea');
textArea.classList.add('textarea-field');
mainContainer.append(textArea); 



// Создаем элементы клавиатуры
const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
mainContainer.append(keyboard);

// контейнер кнопок
// const keyboardKeys = document.createElement('div');
// keyboardKeys.classList.add('keyboard-keys');
// keyboard.appendChild(keyboardKeys);


const keyboardRow1 = document.createElement('div');
keyboardRow1.classList.add('keyboard-row', 'keyboard-row1');
const keyboardRow2 = document.createElement('div');
keyboardRow2.classList.add('keyboard-row', 'keyboard-row2');
const keyboardRow3 = document.createElement('div');
keyboardRow3.classList.add('keyboard-row', 'keyboard-row3');
const keyboardRow4 = document.createElement('div');
keyboardRow4.classList.add('keyboard-row', 'keyboard-row4');
const keyboardRow5 = document.createElement('div');
keyboardRow5.classList.add('keyboard-row', 'keyboard-row5');
keyboard.append(keyboardRow1);
keyboard.append(keyboardRow2);
keyboard.append(keyboardRow3);
keyboard.append(keyboardRow4);
keyboard.append(keyboardRow5);


// Создаем кнопки клавиатуры
const keys = [
  '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'DEL',
  'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'enter', 
  'shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'shift',
  'Ctrl', 'Win', 'alt', 'space', 'alt', 'Ctrl', '◄', '▼', '►'
];

// Добавляем каждую кнопку в контейнер кнопок
for (let j=0; j<keys.length; j++){
  const keyElement = document.createElement('button');
  keyElement.setAttribute('type', 'button');
  keyElement.classList.add('key');
  keyElement.textContent = keys[j];
  //  console.log(keyElement);
  if (j < 14) {
    keyboardRow1.append(keyElement);
  } else if ( j > 13 && j < 29) {
    keyboardRow2.append(keyElement);
  } else if (j > 28 && j< 42 ) {
    keyboardRow3.append(keyElement);
  } else if ( j>41 && j < 55) {
    keyboardRow4.append(keyElement);
  } else if (j> 54) {
    keyboardRow5.append(keyElement);
  }

  if (keys[j] == 'Tab' || keys[j] == 'DEL' || keys[j] == 'Win' ||keys[j] == 'alt') {
    keyElement.classList.add('key-medium');
  }

  if (keys[j] == 'backspace' || keys[j] == 'Caps Lock' || keys[j] == 'enter'
   ||keys[j] == 'shift' || keys[j] == 'Ctrl') {
    keyElement.classList.add('key-large');
  }

  if (keys[j] == 'space') {
    keyElement.classList.add('key-extra-large');
  }
}

// // Добавляем клавиатуру в div с id="keyboard"
// const keyboardContainer = document.getElementById('keyboard');
// keyboardContainer.appendChild(keyboard);

// const body = document.querySelector("body");
// const div = document.createElement("div");
// div.classList.add("area");
// const h = document.createElement("h1");
// h.textContent = "Виртуальная клавиатура";
// const txtarea = document.createElement("textarea");
// const board = document.createElement("div");
// board.classList.add("board");
// const p = document.createElement("p");

// body.append(div);
// div.append(h);
// div.append(txtarea);
// div.append(board);
// div.append(p);
// // eslint-disable-next-line quotes
// // p.innerHTML = `<p>Клавиатура создана в операционной системе Windows<p><p>Для переключения языка комбинации: левые cltr +alt</p>`;


// Keyboard was made with OS Windows. Shortcut for change language: Ctrl+Alt. 

document.addEventListener("keydown", (event) => {
    console.log(event);
    console.log("event.code", event.code); // this is my solution!!!
    console.log("event.key", event.key);
    console.log(event.getModifierState("Shift", "NumLock")); // true
    // console.log(event.)
  });



