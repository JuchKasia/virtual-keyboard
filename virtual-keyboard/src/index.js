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
languageText.textContent = 'Change language: left Shift + left Alt';
descriptionContainer.append(languageText);

// заголовок windows
const windowsText = document.createElement('p');
windowsText.classList.add('windows-text');
windowsText.textContent = 'Made for Windows';
descriptionContainer.append(windowsText);


// textarea
const textArea = document.createElement('textarea');
textArea.classList.add('textarea-field');
textArea.setAttribute('autofocus', true);
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
const keysEngShift = [
  '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
  'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del',
  'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '\'', 'Enter', 
  'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '▲', 'Shift',
  'Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl', '◄', '▼', '►'
];

const keysRuShift = [
  'Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace',
  'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '|', 'Del',
  'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 
  'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '▲', 'Shift',
  'Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl', '◄', '▼', '►'
];

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
// function showKeys(keys) {
//     for (let j=0; j<keys.length; j++){
//     const keyElement = document.createElement('button');
//     keyElement.setAttribute('type', 'button');
//     keyElement.classList.add('key');
//     keyElement.textContent = keys[j];
//     //  console.log(keyElement);
//     if (j < 14) {
//       keyboardRow1.append(keyElement);
//     } else if ( j > 13 && j < 29) {
//       keyboardRow2.append(keyElement);
//     } else if (j > 28 && j< 42 ) {
//       keyboardRow3.append(keyElement);
//     } else if ( j>41 && j < 55) {
//       keyboardRow4.append(keyElement);
//     } else if (j> 54) {
//       keyboardRow5.append(keyElement);
//     }

//     if (keys[j] == 'Tab' || keys[j] == 'DEL' || keys[j] == 'Win' ||keys[j] == 'alt') {
//       keyElement.classList.add('key-medium');
//     }

//     if (keys[j] == 'backspace' || keys[j] == 'Caps Lock' || keys[j] == 'enter'
//     ||keys[j] == 'shift' || keys[j] == 'Ctrl') {
//       keyElement.classList.add('key-large');
//     }

//     if (keys[j] == 'space') {
//       keyElement.classList.add('key-extra-large');
//     }
//   }
// }
// showKeys(keysEng)


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


function showKeys(keys) {
  for (let j=0; j<keys.length; j++){
    const keyElement = document.createElement('button');
    keyElement.setAttribute('type', 'button');
    keyElement.classList.add('key');
    //keyElement.textContent = keysEng[j]; рабочий вариант как было в начале
    // или же 
    keyElement.textContent = keys[j].key.en;

    // console.log(keys[j].key.en);//масив масивов
    // console.log(keyElement);
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

    if (keys[j].key.en == 'Tab' || keys[j].key.en == 'Del' || keys[j].key.en == 'Win' ||keys[j].key.en == 'Alt') {
      keyElement.classList.add('key-medium');
    }

    if (keys[j].key.ru == 'Tab' || keys[j].key.ru == 'Del' || keys[j].key.ru == 'Win' ||keys[j].key.ru == 'Alt') {
      keyElement.classList.add('key-medium');
    }

    if (keys[j].key.en == 'Backspace' || keys[j].key.en == 'CapsLock' || keys[j].key.en == 'Enter'
    ||keys[j].key.en == 'Shift' || keys[j].key.en == 'Ctrl') {
      keyElement.classList.add('key-large');
    }

    if (keys[j].key.ru == 'Backspace' || keys[j].key.ru == 'CapsLock' || keys[j].key.ru == 'Enter'
    ||keys[j].key.ru == 'Shift' || keys[j].key.ru == 'Ctrl') {
      keyElement.classList.add('key-large');
    }

    if (keys[j].key.en == 'Space') {
      keyElement.classList.add('key-extra-large');
    }
  }
}
showKeys(keys);


// pressing a key on a physical keyboard highlights the key on the virtual keyboard
let keyButtons = document.querySelectorAll('.key');
  // console.log(keyButtons);
    document.addEventListener('keydown', function(event){
  // console.log(event.key)
    for(let i = 0; i < keyButtons.length; i++){
    // console.log(keyButtons[i].innerHTML);
      if(event.key == keyButtons[i].innerHTML){
          keyButtons[i].style.backgroundColor = 'rgb(238, 229, 217)';
          keyButtons[i].style.animation ='all 0.2s';

      if(
        // event.code === 'Backspace'
        event.code === 'Backspace' || event.code === 'Tab' || event.code == 'Delete' 
          || event.code.code === 'CapsLock' || event.code === 'Enter' || event.code == 'ShiftLeft' 
          || event.code === 'ShiftRight' || event.code === 'ControlLeft' || event.code == 'MetaLef' 
          || event.code === 'AltLeft' || event.code === 'Space' || event.code == 'AltRight' 
          || event.code === 'ControlRight' || event.code === 'ArrowUp' || event.code === 'ArrowLeft' 
          || event.code === 'ArrowDown' || event.code === 'ArrowRight'
        // event.key == keyButtons[i].innerHTML 
        ){
          textArea.value += '';
          keyButtons[i].style.backgroundColor = 'rgb(238, 229, 217)';
          keyButtons[i].style.animation ='all 0.2s';
          setTimeout(()=>{
            keyButtons[i].style.backgroundColor = "#fff";
          },200);
          // keyButtons[i].style.backgroundColor = '#fff';
          continue;
        }
        textArea.value += event.key;
        textArea.blur(); 
      // console.log(event.code);
    }
    setTimeout(()=>{
      keyButtons[i].style.backgroundColor = "#fff";
    },200);

 
      
 }
});

   for (let i = 0; i < keyButtons.length; i++) {
    keyButtons[i].addEventListener('click', function() {

      // press backspace
      if(keyButtons[i].innerHTML == "Backspace"){
        console.log("back");
        textArea.value = textArea.value.slice(0, -1);
        return;
      }

      // press delete
      if(keyButtons[i].innerHTML == "Del"){
        console.log("1");
        // Получение позиции курсора в поле ввода
        let cursorPosition = textArea.selectionStart;
        // Получение текста поля ввода
        let textareaValue = textArea.value;
        // Получение длины текста поля ввода
        let textareaLength = textareaValue.length;

        if (cursorPosition < textareaLength) {
           // Если курсор находится не в конце текста
           // Удаление символа после курсора
          let newTextareaValue = textareaValue.slice(0, cursorPosition) + textareaValue.slice(cursorPosition + 1);
          // let newTextareaValue =textareaValue.slice(cursorPosition + 1);
          console.log("2");
            // Обновление текста поля ввода
          textArea.value = newTextareaValue;
             // Установка курсора на ту же позицию
          textArea.selectionStart = cursorPosition;
          textArea.selectionEnd = cursorPosition;

        } 
        return;
      }

      // press enter
      if(keyButtons[i].innerHTML == "Enter") {
        textArea.value += '\n';
        return;
      }

      // press tab
      if(keyButtons[i].innerHTML == "Tab"){
        textArea.value += '\t';
        return;
      }

      textArea.value +=  keyButtons[i].innerHTML  
        // keyButtons[i].
        console.log(keyButtons[i].innerHTML);
     
    })
     }



let  forLanguage = false;//global
let pressCapsLock = false;
let pressShift = false;

document.addEventListener("keydown", (event) => {
    console.log(event);
    // console.log("event.code", event.code);
    // console.log("event.key", event.key);
    console.log(event.getModifierState("Shift", "NumLock")); // true

   // change language
    if(event.getModifierState("Shift") && event.getModifierState("Alt")) {
      // console.log(" for language");
      forLanguage = !forLanguage; // change true to false
      // console.log("forLanguage", forLanguage);
      language();
    }

    // press CapsLock
    if(event.code =="CapsLock") {
      pressCapsLock = !pressCapsLock; // change true to false
      console.log("pressCapsLock");
      // capsLockActive(pressCapsLock);
      language();
    }
    console.log(pressCapsLock +" : "+ forLanguage);


// press Shift
    if(event.code == "ShiftLeft" || event.code == "ShiftRight"){
      pressShift = !pressShift;
      pressShiftKey()
      console.log('fbdgbfd');
    }

});


document.addEventListener("keyup", (event) => {
  // unpress Shift
  if(event.code == "ShiftLeft" || event.code == "ShiftRight"){
    pressShift = !pressShift;
    console.log('hgff');
    unPressShiftKey()
  }
})


function language(){
  for (let i = 0; i < 53; i++) {
    // console.log(keys[i]);
    //console.log("forLanguage", forLanguage);
    //console.log("pressCapsLock", pressCapsLock);
    if (forLanguage == true) {
      if (pressCapsLock == true && (i >14)) {
        keyButtons[i].textContent = keysRuShift[i];
// здесь у нас два тру, а значит русский и в капслоке
      } else if (pressCapsLock == false) {
        keyButtons[i].textContent = keys[i].key.ru;
        // русский нижний регистр
      }
    } else if (forLanguage == false) {
      if (pressCapsLock == true && (i > 14)) {
        keyButtons[i].textContent = keysEngShift[i];
      } else if (pressCapsLock == false) {
        keyButtons[i].textContent = keys[i].key.en;
      }
    }
  }
}

// press Shift
function pressShiftKey() {
  for (let i =0; i < 53; i++) {
    if (keyButtons[i].textContent == keys[i].key.en) {
      keyButtons[i].textContent = keysEngShift[i];
    } 
    else if (keyButtons[i].textContent == keys[i].key.ru) {
      keyButtons[i].textContent = keysRuShift[i];
    }
  }
}

// unpress Shift
function unPressShiftKey() {
  for (let i =0; i < 53; i++) { 
    if (keyButtons[i].textContent == keysEngShift[i]) {
      keyButtons[i].textContent = keys[i].key.en
    } else if (keyButtons[i].textContent == keysRuShift[i]) {
      keyButtons[i].textContent = keys[i].key.ru
    }
  }
}
