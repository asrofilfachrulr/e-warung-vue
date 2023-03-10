/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import VueRouter from "vue-router";
import store from "./store";
import { routes } from "./routes";

require("./bootstrap");

window.Vue = require("vue").default;

Vue.use(VueRouter);
const router = new VueRouter({
    mode: "history",
    routes,
});

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component(
    "product-component",
    require("./components/ProductPage.vue").default
);
Vue.component("cart-component", require("./components/CartPage.vue").default);
Vue.component(
    "product-section",
    require("./components/ProductSection.vue").default
);
Vue.component("product-row", require("./components/ProductRow.vue").default);
Vue.component("product-tile", require("./components/ProductTile.vue").default);

Vue.component(
    "centered-modal",
    require("./components/CenteredModal.vue").default
);

Vue.component(
    "prod-modal-header",
    require("./components/ModalComponent/ProductPage/ProdModalHeader").default
);
Vue.component(
    "prod-modal-body",
    require("./components/ModalComponent/ProductPage/ProdModalBody").default
);
Vue.component(
    "prod-modal-footer",
    require("./components/ModalComponent/ProductPage/ProdModalFooter").default
);

Vue.component(
    "checkout-modal-header",
    require("./components/ModalComponent/Checkout/CheckoutModalHeader.vue")
        .default
);
Vue.component(
    "checkout-modal-body",
    require("./components/ModalComponent/Checkout/CheckoutModalBody.vue")
        .default
);
Vue.component(
    "checkout-modal-footer",
    require("./components/ModalComponent/Checkout/CheckoutModalFooter.vue")
        .default
);

Vue.component(
    "spinner-fullscreen",
    require("./components/SpinnerFullscreen.vue").default
);

Vue.component(
    "disabled-overlay",
    require("./components/DisabledOverlay.vue").default
);

Vue.component("toast", require("./components/Toast.vue").default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: "#app",
    store,
    router,
});
