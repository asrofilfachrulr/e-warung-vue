/*
 *  cart = {
 *       products:{
 *          idProduk1:{
 *              name
 *              price
 *              total
 *              request: {req1: qty1. req2: qty2}
 *          idProduk2
 *          ...
 *          ..
 *          }.
 *       total
 *      }
 */

const helper = {
    calculateItemTotal: (request, price) => {
        const qty = Object.values(request).reduce((s, v) => s + v);
        return price * qty;
    },
    calculateCartTotal: (products) => {
        return Object.values(products)
            .map((it) => it["total"])
            .reduce((s, v) => s + v);
    },
};

const addItem = (state, { id, req, name, price, qty }) => {
    console.log("add item mutation requested");
    if (state.cart["products"].hasOwnProperty(id)) {
        if (state.cart["products"][id]["request"].hasOwnProperty(req))
            state.cart["products"][id]["request"][req] += qty;
        else state.cart["products"][id]["request"][req] = qty;

        // calculate new total based on total qty x price
        console.log("calculating new total each item..");
        state.cart["products"][id]["total"] = helper.calculateItemTotal(
            state.cart["products"][id]["request"],
            price
        );
    } else {
        state.cart["products"][id] = {
            name,
            price,
            total: price * qty,
            request: {},
        };
        state.cart["products"][id]["request"][req] = qty;
    }

    console.log("calculating total cart");
    state.cart["total"] = helper.calculateCartTotal(state.cart["products"]);

    console.log("an item added");
};
export default {
    addItem,
};
