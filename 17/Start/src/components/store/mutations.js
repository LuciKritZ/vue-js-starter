// Exporting all the mutations in a single file and then exporting them in the main central store.
export const updateValue = (state, payload) => {
    state.value = payload;
}