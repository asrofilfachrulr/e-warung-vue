const fetchCounter = async function ({ commit }) {
    console.log("dispatch fetchCounter...");
    const response = await axios.get("api/checkout/counter");
    commit("setCounter", response.data);
};

const postOrder = async function (_, payload) {
    const response = await axios.post("api/order", payload);

    return response;
};

export default {
    fetchCounter,
    postOrder,
};
