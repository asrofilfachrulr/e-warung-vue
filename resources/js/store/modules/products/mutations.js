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

// Changes based on origin
const modifyStock = (state, payload) => {
    console.log("modify stock requested");
    if (payload.id[0] === "f") {
        for (let i = 0; i < state.foods.total; i++)
            if (state.foods.items[i].id === payload.id) {
                state.foods.items[i].stock =
                    state.foods.items[i].origin - payload.number;
                break;
            }
    } else if (payload.id[0] === "d") {
        for (let i = 0; i < state.drinks.total; i++)
            if (state.drinks.items[i].id === payload.id) {
                state.drinks.items[i].stock =
                    state.drinks.items[i].origin - payload.number;
                break;
            }
    } else if (payload.id[0] === "s") {
        for (let i = 0; i < state.snacks.total; i++)
            if (state.snacks.items[i].id === payload.id) {
                state.snacks.items[i].stock =
                    state.snacks.items[i].origin - payload.number;
                break;
            }
    } else {
        console.log("[MUTATION ERROR] ID NOT FOUND on modifyStock");
    }
    console.log("modify stock ended");
};

// Only be executed if user has added product to cart OR product has been ordered (by generating QRcode)
const modifyOrigin = (state, payload) => {
    console.log("modify origin requested");
    if (payload.id[0] === "f") {
        for (let i = 0; i < state.foods.total; i++)
            if (state.foods.items[i].id === payload.id) {
                state.foods.items[i].origin = state.foods.items[i].stock;
                break;
            }
    } else if (payload.id[0] === "d") {
        for (let i = 0; i < state.drinks.total; i++)
            if (state.drinks.items[i].id === payload.id) {
                state.drinks.items[i].origin = state.drinks.items[i].stock;
                break;
            }
    } else if (payload.id[0] === "s") {
        for (let i = 0; i < state.snacks.total; i++)
            if (state.snacks.items[i].id === payload.id) {
                state.snacks.items[i].origin = state.snacks.items[i].stock;
                break;
            }
    } else {
        console.log("[MUTATION ERROR] ID NOT FOUND on modifyOrigin");
    }
    console.log("modify origin ended");
};

// when user didnt add to cart, any change to stock will be reset to origin
const rebootStock = (state, payload) => {
    console.log("reboot stock requested");
    if (payload.id[0] === "f") {
        for (let i = 0; i < state.foods.total; i++)
            if (state.foods.items[i].id === payload.id) {
                state.foods.items[i].stock = state.foods.items[i].origin;
                break;
            }
    } else if (payload.id[0] === "d") {
        for (let i = 0; i < state.drinks.total; i++)
            if (state.drinks.items[i].id === payload.id) {
                state.drinks.items[i].stock = state.drinks.items[i].origin;
                break;
            }
    } else if (payload.id[0] === "s") {
        for (let i = 0; i < state.snacks.total; i++)
            if (state.snacks.items[i].id === payload.id) {
                state.snacks.items[i].stock = state.snacks.items[i].origin;
                break;
            }
    } else {
        console.log("[MUTATION ERROR] ID NOT FOUND on rebootStock");
    }
    console.log("reboot stock ended");
};

export default {
    setFoods,
    setDrinks,
    setSnacks,
    modifyStock,
    modifyOrigin,
    rebootStock,
};
