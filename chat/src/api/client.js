import io from 'socket.io-client';
import feathers from 'feathers-client';
import Store from '../store';

const serverUrl = 'http://localhost:3030';
const socket = io(serverUrl);
const feathersClient = feathers()
    .configure(feathers.socketio(socket));

feathersClient.service('/message').on('created', (row) => {
    Store.commit('addMessage', row);
});

export default feathersClient;
