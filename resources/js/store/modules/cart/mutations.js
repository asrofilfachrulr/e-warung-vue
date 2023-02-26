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
        console.log("calculating new total each item..");
        const qty = Object.values(request).reduce((s, v) => s + v);
        return price * qty;
    },
    calculateCartTotal: (products) => {
        console.log("calculating total cart");
        return Object.values(products)
            .map((it) => it["total"])
            .reduce((s, v) => s + v);
    },
};

const addItem = (state, { id, req, name, price, qty }) => {
    console.log("add item to cart..");
    if (state.cart["products"].hasOwnProperty(id)) {
        if (state.cart["products"][id]["request"].hasOwnProperty(req))
            state.cart["products"][id]["request"][req] += qty;
        else state.cart["products"][id]["request"][req] = qty;

        // calculate new total based on total qty x price
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

    state.cart["total"] = helper.calculateCartTotal(state.cart["products"]);

    console.log("an item added");
};

// Default for decreasing qty
const modifyCart = (state, { id, req, qty }) => {
    console.log("begin to modify cart");
    if (!state.cart.products[id])
        console.log(`PRODUCT ID: '${id}' NOT FOUND ON CART ITEM`);
    else {
        if (state.cart.products[id].request[req] == undefined)
            console.log(`REQUEST: '${req}' NOT FOUND ON CART ITEM`);
        else {
            state.cart.products[id].request[req] -= qty;

            // delete if key on request if qty = 0
            if (state.cart.products[id].request[req] == 0)
                delete state.cart.products[id].request[req];

            if (Object.keys(state.cart.products[id].request).length == 0)
                // delete if there is no request left
                delete state.cart.products[id];
            // recalculate item total
            else
                state.cart.products[id].total = helper.calculateItemTotal(
                    state.cart.products[id].request,
                    state.cart.products[id].price
                );

            //recalculate cart total

            state.cart.total =
                Object.keys(state.cart.products).length != 0
                    ? helper.calculateCartTotal(state.cart.products)
                    : 0;
        }
    }
    console.log("modify cart ended");
};

const finishCart = (state) => {
    console.log("finishing cart by emptying cart without restock...");
    state.cart.products = {};
    state.cart.total = 0;
};
export default {
    addItem,
    modifyCart,
    finishCart,
};
