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
// const keysEng = [
//   '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
//   'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'DEL',
//   'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'enter', 
//   'shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'shift',
//   'Ctrl', 'Win', 'alt', 'space', 'alt', 'Ctrl', '◄', '▼', '►'
// ];

// const keysRu = [
//   'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
//   'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'DEL',
//   'Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'enter', 
//   'shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', 'ю', '.', '▲', 'shift',
//   'Ctrl', 'Win', 'alt', 'space', 'alt', 'Ctrl', '◄', '▼', '►'
// ];

const keys = [
  {
    key: {
      ru: "ё",
      en: "`"
    },
    shift: {
        ru: "Ё",
        en: "~"
    },
    code: "Backquote"
  }, {
    key: {
        ru: "1",
        en: "1"
    },
    shift: {
        ru: "!",
        en: "!"
    },
    code: "Digit1"
  }, {
    key: {
        ru: "2",
        en: "2"
    },
    shift: {
        ru: '"',
        en: "@"
    },
    code: "Digit2"
  }, {
    key: {
        ru: "3",
        en: "3"
    },
    shift: {
        ru: "№",
        en: "#"
    },
    code: "Digit3"
  }, {
    key: {
        ru: "4",
        en: "4"
    },
    shift: {
        ru: ";",
        en: "$"
    },
    code: "Digit4"
  }, {
    key: {
        ru: "5",
        en: "5"
    },
    shift: {
        ru: "%",
        en: "%"
    },
    code: "Digit5"
  }, {
    key: {
        ru: "6",
        en: "6"
    },
    shift: {
        ru: ":",
        en: "^"
    },
    code: "Digit6"
  }, {
    key: {
        ru: "7",
        en: "7"
    },
    shift: {
        ru: "?",
        en: "&"
    },
    code: "Digit7"
  }, {
    key: {
        ru: "8",
        en: "8"
    },
    shift: {
        ru: "*",
        en: "*"
    },
    code: "Digit8"
  }, {
    key: {
        ru: "9",
        en: "9"
    },
    shift: {
        ru: "(",
        en: "("
    },
    code: "Digit9"
  }, {
    key: {
        ru: "0",
        en: "0"
    },
    shift: {
        ru: ")",
        en: ")"
    },
    code: "Digit0"
  }, {
    key: {
        ru: "-",
        en: "-"
    },
    shift: {
        ru: "_",
        en: "_"
    },
    code: "Minus"
  }, {
    key: {
        ru: "=",
        en: "="
    },
    shift: {
        ru: "+",
        en: "+"
    },
    code: "Equal"
  }, {
    key: {
      ru: "Backspace",
      en: "Backspace"
    },
    code: "Backspace",
    // class: "key-backspace",
    // noType: !0
  }, 
  {
    key: {
      ru: "Tab",
      en: "Tab"
    },
    code: "Tab",
    // class: "key-tab",
    // noType: !0
  }, {
    key: {
        ru: "й",
        en: "q"
    },
    shift: {
        ru: "Й",
        en: "Q"
    },
    code: "KeyQ"
  }, {
    key: {
        ru: "ц",
        en: "w"
    },
    shift: {
        ru: "Ц",
        en: "W"
    },
    code: "KeyW"
  }, {
    key: {
        ru: "у",
        en: "e"
    },
    shift: {
        ru: "У",
        en: "E"
    },
    code: "KeyE"
  }, {
    key: {
        ru: "к",
        en: "r"
    },
    shift: {
        ru: "К",
        en: "R"
    },
    code: "KeyR"
  }, {
    key: {
        ru: "е",
        en: "t"
    },
    shift: {
        ru: "Е",
        en: "T"
    },
    code: "KeyT"
  }, {
    key: {
        ru: "н",
        en: "y"
    },
    shift: {
        ru: "Н",
        en: "Y"
    },
    code: "KeyY"
  }, {
    key: {
        ru: "г",
        en: "u"
    },
    shift: {
        ru: "Г",
        en: "U"
    },
    code: "KeyU"
  }, {
    key: {
        ru: "ш",
        en: "i"
    },
    shift: {
        ru: "Ш",
        en: "I"
    },
    code: "KeyI"
  }, {
    key: {
        ru: "щ",
        en: "o"
    },
    shift: {
        ru: "Щ",
        en: "O"
    },
    code: "KeyO"
  }, {
    key: {
        ru: "з",
        en: "p"
    },
    shift: {
        ru: "З",
        en: "P"
    },
    code: "KeyP"
  }, {
    key: {
        ru: "х",
        en: "["
    },
    shift: {
        ru: "Х",
        en: "{"
    },
    code: "BracketLeft"
  }, {
    key: {
        ru: "ъ",
        en: "]"
    },
    shift: {
        ru: "Ъ",
        en: "}"
    },
    code: "BracketRight"
  }, {
    key: {
        ru: "\\",
        en: "\\"
    },
    shift: {
        ru: "|",
        en: "|"
    },
    code: "Backslash",
    // class: "key-backslash"
  }, {
    key: {
      ru: "Del",
      en: "Del"
    },
    code: "Delete",
    // class: "key-del",
    // noType: !0
  },
  {
    key: {
      ru: "CapsLock",
      en: "CapsLock"
    },
    code: "CapsLock",
    // class: "key-capslock",
    // noType: !0
  }, {
    key: {
      ru: "ф",
      en: "a"
    },
    shift: {
        ru: "Ф",
        en: "A"
    },
    code: "KeyA"
  }, {
    key: {
        ru: "ы",
        en: "s"
    },
    shift: {
        ru: "Ы",
        en: "S"
    },
    code: "KeyS"
  }, {
    key: {
        ru: "в",
        en: "d"
    },
    shift: {
        ru: "В",
        en: "D"
    },
    code: "KeyD"
  }, {
    key: {
        ru: "а",
        en: "f"
    },
    shift: {
        ru: "А",
        en: "F"
    },
    code: "KeyF"
  }, {
    key: {
        ru: "п",
        en: "g"
    },
    shift: {
        ru: "П",
        en: "G"
    },
    code: "KeyG"
  }, {
    key: {
        ru: "р",
        en: "h"
    },
    shift: {
        ru: "Р",
        en: "H"
    },
    code: "KeyH"
  }, {
    key: {
        ru: "о",
        en: "j"
    },
    shift: {
        ru: "О",
        en: "J"
    },
    code: "KeyJ"
  }, {
    key: {
        ru: "л",
        en: "k"
    },
    shift: {
        ru: "Л",
        en: "K"
    },
    code: "KeyK"
  }, {
    key: {
        ru: "д",
        en: "l"
    },
    shift: {
        ru: "Д",
        en: "L"
    },
    code: "KeyL"
  }, {
    key: {
        ru: "ж",
        en: ";"
    },
    shift: {
        ru: "Ж",
        en: ":"
    },
    code: "Semicolon"
  }, {
    key: {
        ru: "э",
        en: "'"
    },
    shift: {
        ru: "Э",
        en: '"'
    },
    code: "Quote"
  }, {
    key: {
      ru: "Enter",
      en: "Enter"
    },
    code: "Enter",
    // class: "key-enter",
    // noType: !0
  }, {
    key: {
      ru: "Shift",
      en: "Shift"
    },
    code: "ShiftLeft",
    // class: "key-leftshift",
    // noType: !0
  }, {
    key: {
        ru: "я",
        en: "z"
    },
    shift: {
        ru: "Я",
        en: "Z"
    },
    code: "KeyZ"
  }, {
    key: {
        ru: "ч",
        en: "x"
    },
    shift: {
        ru: "Ч",
        en: "X"
    },
    code: "KeyX"
  }, {
    key: {
        ru: "с",
        en: "c"
    },
    shift: {
        ru: "С",
        en: "C"
    },
    code: "KeyC"
  }, {
    key: {
        ru: "м",
        en: "v"
    },
    shift: {
        ru: "М",
        en: "V"
    },
    code: "KeyV"
  }, {
    key: {
        ru: "и",
        en: "b"
    },
    shift: {
        ru: "И",
        en: "B"
    },
    code: "KeyB"
  }, {
    key: {
        ru: "т",
        en: "n"
    },
    shift: {
        ru: "Т",
        en: "N"
    },
    code: "KeyN"
  }, {
    key: {
        ru: "ь",
        en: "m"
    },
    shift: {
        ru: "Ь",
        en: "M"
    },
    code: "KeyM"
  }, {
    key: {
        ru: "б",
        en: ","
    },
    shift: {
        ru: "Б",
        en: "<"
    },
    code: "Comma"
  }, {
    key: {
        ru: "ю",
        en: "."
    },
    shift: {
        ru: "Ю",
        en: ">"
    },
    code: "Period"
  }, {
    key: {
        ru: ".",
        en: "/"
    },
    shift: {
        ru: ",",
        en: "?"
    },
    code: "Slash"
  }, {
    key: {
      ru: "▲",
      en: "▲",
    },
    code: "ArrowUp",
    // noType: !0
  }, {
    key: {
      ru: "Shift",
      en: "Shift",
    },
    code: "ShiftRight",
    // class: "key-rightshift",
    // noType: !0
  }, {
    key: {
      ru: "Ctrl",
      en: "Ctrl",
    },
    code: "ControlLeft",
    // class: "key-leftctrl",
    // noType: !0
  }, {
    key: {
      ru: "Win",
      en: "Win",
    },
    code: "MetaLef",
    // class: "key-leftalt",
    // noType: !0
  }, {
    key: {
      ru: "Alt",
      en: "Alt",
    },
    code: "AltLeft",
    // class: "key-leftalt",
    // noType: !0
  }, {
    key: {
      ru: "Space",
      en: "Space",
    },
    code: "Space",
    // class: "key-space"
  }, {
    key: {
      ru: "Alt",
      en: "Alt",
    },
    code: "AltRight",
    // class: "key-rightalt",
    // noType: !0
  }, {
    key: {
      ru: "Ctrl",
      en: "Ctrl",
    },
    code: "ControlRight",
    // class: "key-rightctrl",
    // noType: !0
  }, {
    key: {
      ru: "◄",
      en: "◄",
    },
    code: "ArrowLeft",
    // noType: !0
  }, {
    key: {
      ru: "▼",
      en: "▼",
    },
    code: "ArrowDown",
    // noType: !0
  }, {
    key: {
      ru: "►",
      en: "►",
    },
    code: "ArrowRight",
    // noType: !0
  },
]


// Добавляем каждую кнопку в контейнер кнопок ENGLISH LANGUAGE
function showKeys(keys) {
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
}
showKeys(keysEng)


// Добавляем каждую кнопку в контейнер кнопок RUSSIAN LANGUAGE
// function showRuLang() {
//   for (let j=0; j<keysRu.length; j++){
//   const keyElement = document.createElement('button');
//   keyElement.setAttribute('type', 'button');
//   keyElement.classList.add('key');
//   keyElement.textContent = keysRu[j];
//   //  console.log(keyElement);
//   if (j < 14) {
//     keyboardRow1.append(keyElement);
//   } else if ( j > 13 && j < 29) {
//     keyboardRow2.append(keyElement);
//   } else if (j > 28 && j< 42 ) {
//     keyboardRow3.append(keyElement);
//   } else if ( j>41 && j < 55) {
//     keyboardRow4.append(keyElement);
//   } else if (j> 54) {
//     keyboardRow5.append(keyElement);
//   }

//   if (keysRu[j] == 'Tab' || keysRu[j] == 'DEL' || keysRu[j] == 'Win' ||keysRu[j] == 'alt') {
//     keyElement.classList.add('key-medium');
//   }

//   if (keysRu[j] == 'backspace' || keysRu[j] == 'Caps Lock' || keysRu[j] == 'enter'
//   || keysRu[j] == 'shift' || keysRu[j] == 'Ctrl') {
//     keyElement.classList.add('key-large');
//   }

//   if (keysRu[j] == 'space') {
//     keyElement.classList.add('key-extra-large');
//   }
// }
// }
// showRuLang()

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



