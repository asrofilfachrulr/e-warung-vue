const setCounter = (state, payload) => {
    console.log(`get payload: ${payload} for set counter`);
    state.counter = payload.counter;
    console.log("checkout counter mutated");
};

export default {
    setCounter,
};
