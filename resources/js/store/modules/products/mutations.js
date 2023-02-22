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

const modifyStock = (state, payload) => {
    console.log("modify stock requested");
    if (payload.id[0] === "f") {
        for (let i = 0; i < state.foods.total; i++)
            if (state.foods.items[i].id === payload.id) {
                state.foods.items[i].stock -= payload.number;
                break;
            }
    } else if (payload.id[0] === "d") {
        for (let i = 0; i < state.drinks.total; i++)
            if (state.drinks.items[i].id === payload.id) {
                state.drinks.items[i].stock -= payload.number;
                break;
            }
    } else if (payload.id[0] === "s") {
        for (let i = 0; i < state.snacks.total; i++)
            if (state.snacks.items[i].id === payload.id) {
                state.snacks.items[i].stock -= payload.number;
                break;
            }
    } else {
        console.log("[MUTATION ERROR] ID NOT FOUND on modifyStock");
    }
    console.log("modifiy stock ended");
};

export default {
    setFoods,
    setDrinks,
    setSnacks,
    modifyStock,
};
