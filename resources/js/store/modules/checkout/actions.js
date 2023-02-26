const fetchCounter = async function ({ commit }) {
    console.log("dispatch fetchCounter...");
    const response = await axios.get("api/checkout/counter");
    commit("setCounter", response.data);
};

export default {
    fetchCounter,
};
