const setFoods = (state, payload) => {
    state.foods = payload;
    console.log("foods mutated");
};
const setDrinks = (state, payload) => {
    state.drinks = payload;
    console.log("drinks mutated");
};
const setSnacks = (state, payload) => {
    state.snacks = payload;
    console.log("snacks mutated");
};

export default {
    setFoods,
    setDrinks,
    setSnacks,
};
