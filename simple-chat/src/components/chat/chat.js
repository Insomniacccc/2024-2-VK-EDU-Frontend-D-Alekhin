export function createChat() {
    const chat = document.createElement('div');
    chat.className = 'chat';

    const form = document.createElement('form');
    form.className = 'form';

    const messagesContainer = document.createElement('div');
    messagesContainer.className = 'messages';

    const messageInputContainer = document.createElement('label');
    messageInputContainer.className = 'message-input-container';

    const messageInput = document.createElement('input');

    messageInput.className = 'message-input';
    messageInput.name = 'message-text';
    messageInput.placeholder = 'Сообщение';
    messageInput.type = 'text';

    form.addEventListener('submit', handleSubmit);

    loadMessages();

    chat.appendChild(messagesContainer);
    chat.appendChild(form);

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
}