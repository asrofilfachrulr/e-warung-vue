const addToCart = function ({ commit }, payload) {
    commit("addItem", payload);
};

const modifyCart = function ({ commit }, payload) {
    commit("modifyItem", payload);
};

const resetCart = function ({ commit }) {
    commit("resetCart");
};

export default {
    addToCart,
    modifyCart,
    resetCart,
};
