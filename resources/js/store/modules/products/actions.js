const fetchFoods = async function ({ commit }) {
    console.log("dispatch fetchFoods...");
    const response = await axios.get("api/list-menu?category=food");
    commit("setFoods", response.data);
};
const fetchDrinks = async function ({ commit }) {
    console.log("dispatch fetchDrinks...");
    const response = await axios.get("api/list-menu?category=drink");
    commit("setDrinks", response.data);
};
const fetchSnacks = async function ({ commit }) {
    console.log("dispatch fetchSnacks...");
    const response = await axios.get("api/list-menu?category=snack");
    commit("setSnacks", response.data);
};

const fetchAllProducts = async function ({ commit }) {
    console.log("fetching all products requested");

    await fetchFoods({ commit });

    await fetchDrinks({ commit });

    await fetchSnacks({ commit });
};

const modifyStock = function ({ commit }, payload) {
    commit("modifyStock", payload);
};

const modifyOrigin = function ({ commit }, payload) {
    commit("modifyOrigin", payload);
};

const rebootStock = function ({ commit }, payload) {
    commit("rebootStock", payload);
};

export default {
    fetchFoods,
    fetchDrinks,
    fetchSnacks,
    fetchAllProducts,
    modifyStock,
    modifyOrigin,
    rebootStock,
};
