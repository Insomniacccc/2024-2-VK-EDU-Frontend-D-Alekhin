import '../styles/index.css';

const form = document.querySelector('form');
const input = document.querySelector('.message-input');
const messageList = document.querySelector('.message-list');
const backButton = document.querySelector('.back-button');

const messages = JSON.parse(localStorage.getItem('messages')) ?? [];

window.addEventListener('load', () => {
    messages.forEach(displayMessage);
});

window.addEventListener('unload', () => {
    saveInLocalStorage();
});

form.addEventListener('submit', handleSubmit);

form.addEventListener('keypress', handleKeyPress);

backButton.addEventListener('click', () => {
    window.location.href = 'http://localhost:8080/';
});

function handleSubmit(event) {
    event.preventDefault();
    const messageText = input.value.trim();

    if (messageText) {
        const message = {
            text: messageText,
            from: 'Jennifer',
            time: new Date().toLocaleTimeString('RU', {
                hour: '2-digit',
                minute: '2-digit',
            }),
        };

        messages.push(message);
        displayMessage(message);
        input.value = '';
    }
}

function handleKeyPress(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        form.dispatchEvent(new Event('submit'));
    }
}

function displayMessage({ text, from, time }) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.innerText = text;

    // Вставляем элемент со временем и автором
    messageElement.insertAdjacentHTML(
        'beforeend',
        `<span class="message-time">${from} at ${time}</span>`
    );

    messageList.appendChild(messageElement);
}

function saveInLocalStorage() {
    localStorage.setItem('messages', JSON.stringify(messages));
}