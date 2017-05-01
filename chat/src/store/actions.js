import feathersClient from '../api/client';

export const actions = {
    addMessageAsync(context, newMessage) {
        const messageService = feathersClient.service('/message');
        //optimistic
        messageService.create(newMessage);
        //.then(row => context.commit('addMessage', { message: row.message }));
    },
    getMessagesAsync(context) {
        const message = feathersClient.service('/message');
        message.find({
            query: {
                $sort: { date: -1 }
            },
            paginate: {
                default: 100,
                max: 200
            },
        }).then(o => o.data).then(messages => { context.commit('updateMessages', messages); });
    }
}
