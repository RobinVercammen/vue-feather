import feathersClient from '../api/client';
import { SET_MESSAGES } from './mutation-types';

const messageService = feathersClient.service('/message');

export const actions = {
  addMessageAsync(context, newMessage) {
    messageService.create(newMessage);
  },
  getMessagesAsync(context) {
    messageService
      .find({
        query: {
          $sort: {
            date: -1,
          },
        },
        paginate: {
          default: 100,
          max: 200,
        },
      })
      .then((response) => {
        context.commit(SET_MESSAGES, response.data);
      });
  },
};
