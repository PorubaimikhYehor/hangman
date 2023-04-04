let userName;
let alphabet = createAlphabet();
const root = document.getElementById("root");
const newWordButton = createElement('button', root, { onclick: clickNewWord, innerText: "New word" });
let word;
showAlphabet();
showWord();
function showAlphabet(){
    let element = document.getElementById("alphabet");
    if (element) {
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    } else {
        element = createElement('div', root, {id:"alphabet", className: "flex wrap justify-center" });
    }
    Object.keys(alphabet).map(l => createElement('button', element, { onclick: letterClick, className: "letter-button", innerText: l }));
}
function showWord() {
    if (!word) return;
    let wordEl = document.getElementById("word");
    if (wordEl) {
        while (wordEl.firstChild) {
            wordEl.removeChild(wordEl.firstChild);
        }
    } else {
        wordEl = createElement('div', root, { id: "word", className: "flex wrap justify-center" });
    }
    for (let i = 0; i < word.length; i++) {
        let letter = alphabet[word[i]] ? word[i] : "_";
        if(word[i] == ' ') letter = " ";
        const l = createElement('div', wordEl, { className: "word-letter flex justify-center" })
        createElement('p', l, { className: "", innerText: letter })
    }
}
function clickNewWord() {
    word = prompt("Type secret word");
    word = word.toLocaleUpperCase();
    alphabet = createAlphabet();
    showWord();
    showAlphabet()
}
function letterClick(event) {
    alphabet[event.target.innerText] = true;
    event.target.disabled = true;
    showWord();
}
function createElement(tagName, parentElement, options) {
    const element = document.createElement(tagName);
    parentElement.appendChild(element)
    typeof (options) === 'object' && Object.keys(options).map(key => element[key] = options[key]);
    return element;
}
function createAlphabet() {
    const alphabet = {};
    const alphabetStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 0; i < alphabetStr.length; i++) {
        alphabet[alphabetStr[i]] = false;
    }
    return alphabet;
}

