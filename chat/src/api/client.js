import io from 'socket.io-client';
import feathers from 'feathers-client';
import store from '../store';
import { ADD_MESSAGE } from '../store/mutation-types';

const serverUrl = 'http://localhost:3030';
const socket = io(serverUrl);
const feathersClient = feathers().configure(feathers.socketio(socket));

feathersClient.service('/message').on('created', (message) => {
    store.commit(ADD_MESSAGE, message);
});

export default feathersClient;
