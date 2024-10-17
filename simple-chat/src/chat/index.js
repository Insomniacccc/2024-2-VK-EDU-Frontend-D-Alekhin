import { createChatHeader } from '../components/chat/chatHeader.js';
import { createChat } from '../components/chat/chat.js';

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');

    const chatHeader = createChatHeader();
    const chatScreen = createChatScreen();

    app.appendChild(chatHeader);
    app.appendChild(chatScreen);
});
