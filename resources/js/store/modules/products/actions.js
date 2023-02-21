const fetchFoods = async function ({ commit }) {
    const response = await axios.get("api/list-menu?category=food");
    commit("setFoods", response.data);
};
const fetchDrinks = async function ({ commit }) {
    const response = await axios.get("api/list-menu?category=drink");
    commit("setDrinks", response.data);
};
const fetchSnacks = async function ({ commit }) {
    const response = await axios.get("api/list-menu?category=snack");
    commit("setSnacks", response.data);
};

export default {
    fetchFoods,
    fetchDrinks,
    fetchSnacks,
};
