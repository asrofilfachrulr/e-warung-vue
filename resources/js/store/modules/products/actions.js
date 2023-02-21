import axios from "axios";

const fetchFoods = async ({ commit }) => {
    axios
        .get("api/list-menu?category=food")
        .then((response) => commit("setFoods", response.data));
    console.log("fetch foods data");
};
const fetchDrinks = async ({ commit }) => {
    axios
        .get("api/list-menu?category=drink")
        .then((response) => commit("setDrinks", response.data));
    console.log("fetch drinks data");
};
const fetchSnacks = async ({ commit }) => {
    axios
        .get("api/list-menu?category=snack")
        .then((response) => commit("setSnacks", response.data));
    console.log("fetch snacks data");
};

export default {
    fetchFoods,
    fetchDrinks,
    fetchSnacks,
};
