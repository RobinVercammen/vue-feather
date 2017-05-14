import io from 'socket.io-client';
import feathers from 'feathers-client';

const serverUrl = 'http://localhost:3030';
const socket = io(serverUrl);
const feathersClient = feathers().configure(feathers.socketio(socket));
const messageService = feathersClient.service('/message');

// feathersClient.service('/message').on('created', (message) => {
//     store.commit(ADD_MESSAGE, message);
// });

const fixTimestamp = message => {
  message.timestamp = new Date(message.timestamp);
  return message;
};

export function getAllMessages() {
  return messageService
    .find({
      query: {
        $sort: { timestamp: -1 },
      },
      paginate: {
        default: 100,
        max: 200,
      },
    })
    .then(o => o.data || [])
    .then(messages => messages.map(message => fixTimestamp(message)));
}

export function createMessage({ text, thread }) {
  const timestamp = Date.now();
  return messageService
    .create({
      id: `m_${timestamp}`,
      text,
      timestamp,
      threadID: thread.id,
      threadName: thread.name,
      authorName: 'der michmeister',
    })
    .then(message => fixTimestamp(message));
}

export function subscribe(cb) {
  messageService.on('created', cb);
}
