const pressed = [];
const lastPressed = [];
const key = document.querySelector('#key');
const header = document.querySelector('#header');

window.addEventListener('keyup', (e) => {
    pressed.push(e.key);

    if (e.keyCode === 32) {
        const paragraph = lastPressed.concat(pressed);
        const text = paragraph.join('').toString();
        key.innerHTML = text;
    }

    if (key.textContent.includes('secret key')) {
        header.innerHTML = 'Well Done';
        cornify_add();
    }
});