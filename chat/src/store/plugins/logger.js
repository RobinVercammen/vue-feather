export default (store) => {
    store.subscribe((mutation, state) => {
        console.log(mutation.type, mutation.payload);
    });
};
