import Store from '.';

export const state = { messages: [] };

export const mutations = {
    addMessage(store, newMessage) {
        store.messages = [newMessage, ...store.messages];
    },
    updateMessages(store, messages) {
        store.messages = messages;
    }
}
