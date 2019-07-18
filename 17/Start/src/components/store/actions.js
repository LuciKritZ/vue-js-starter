// Storing all the actions in a single file and trimming the file system.

export const updateValue = (context, payload) => {
    context.commit('updateValue', payload);
};