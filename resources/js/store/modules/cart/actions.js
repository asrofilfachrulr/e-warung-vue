const addToCart = function ({ commit }, payload) {
    commit("addItem", payload);
};

const modifyCart = function ({ commit }, payload) {
    commit("modifyCart", payload);
};

const finishCart = function ({ commit }) {
    commit("finishCart");
};

export default {
    addToCart,
    modifyCart,
    finishCart,
};
