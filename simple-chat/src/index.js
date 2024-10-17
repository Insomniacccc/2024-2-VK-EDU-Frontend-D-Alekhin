import './index.css';

const form = document.querySelector('form');
const messageInput = document.querySelector('.message-input');
const messagesContainer = document.querySelector('.messages');

form.addEventListener('submit', handleSubmit);

loadMessages();

function handleSubmit(event) {
    event.preventDefault();

    const text = messageInput.value.trim();
    let sender = 'Вы'

    if (!text) {
        alert('Сообщение не может быть пустым!');
        return;
    }

    saveMessage({ text, sender });
    clearInput();
    loadMessages();
}

function clearInput() {
    messageInput.value = '';
}

function loadMessages() {
    const messages = getStoredMessages();

    messagesContainer.innerHTML = '';

    messages.forEach(({ text, sender, time }) => {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.innerHTML = `<strong>${sender}</strong> (<em>${time}</em>):<br>${text}`;
        messagesContainer.appendChild(messageDiv);
    });
}

function saveMessage({ text, sender }) {
    const time = new Date().toLocaleString();
    const messages = getStoredMessages();

    messages.push({ text, sender, time });
    setStoredMessages(messages);
}

function getStoredMessages() {
        return JSON.parse(localStorage.getItem('messages')) || [];
}

function setStoredMessages(messages) {
        localStorage.setItem('messages', JSON.stringify(messages));
}
