<template>
    <div>
        <h1>Product Page</h1>
        <router-link to="/cart">
            <button class="btn btn-primary">Cart Page</button>
        </router-link>
        <div class="mt-4 d-flex justify-content-evenly">
            <label
                for="radio-food"
                role="btn"
                class="btn btn-primary"
                @click="setCategory('FOODS')"
                ><input
                    id="radio-food"
                    type="radio"
                    name="product-category"
                    checked="true"
                />Foods</label
            >
            <label
                for="radio-drink"
                role="btn"
                class="btn btn-primary"
                @click="setCategory('DRINKS')"
                ><input
                    id="radio-drink"
                    type="radio"
                    name="product-category"
                />Drinks</label
            >
            <label
                for="radio-snack"
                role="btn"
                class="btn btn-primary"
                @click="setCategory('SNACKS')"
                ><input
                    id="radio-snack"
                    type="radio"
                    name="product-category"
                />Snacks</label
            >
        </div>
        <div class="container-fluid">
            <product-section
                :productType="'tile'"
                :products="products"
                :title="currentTitle"
                @productClicked="toggleModalProduct"
            ></product-section>
            <product-section
                :productType="'row'"
                :products="products"
                :title="currentTitle"
                @productClicked="toggleModalProduct"
            ></product-section>
        </div>
        <centered-modal
            :id="modalId"
            :header="modalData.header"
            :body="modalData.body"
            :footer="modalData.footer"
        ></centered-modal>
        <stock-monitor
            :id="'monitorModalId'"
            ref="stockMonitorModal"
            :allProducts="allProducts"
        >
        </stock-monitor>
        <button
            id="btn-right-bot"
            class="btn btn-outline-danger"
            data-bs-toggle="modal"
            data-bs-target="#monitorModalId"
            @click="wrapAllProducts"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-table"
                viewBox="0 0 16 16"
            >
                <path
                    d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm0 4h-4v3h3a1 1 0 0 0 1-1v-2zm-5 3v-3H6v3h4zm-5 0v-3H1v2a1 1 0 0 0 1 1h3zm-4-4h4V8H1v3zm0-4h4V4H1v3zm5-3v3h4V4H6zm4 4H6v3h4V8z"
                />
            </svg>
        </button>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import ProdModalBodyVue from "./ModalComponent/ProductPage/ProdModalBody.vue";
import ProdModalFooterVue from "./ModalComponent/ProductPage/ProdModalFooter.vue";
import ProdModalHeaderVue from "./ModalComponent/ProductPage/ProdModalHeader.vue";
export default {
    data: function () {
        return {
            allProducts: {},
            products: {},
            currentTitle: {},
            product: {},
            titles: {
                foods: {
                    tile: "Paling Banyak Dibeli",
                    row: "Semua Makanan",
                },
                drinks: {
                    tile: "Sikat Promo!",
                    row: "Semua Minuman",
                },
                snacks: {
                    tile: "Bikin Gagal Diet",
                    row: "Semua Camilan",
                },
            },
            modalId: "productModal",
            modalData: {
                header: {
                    component: ProdModalHeaderVue,
                    data: {
                        title: "",
                    },
                },
                body: {
                    component: ProdModalBodyVue,
                    data: {
                        img: "",
                        desc: "",
                        ph: "",
                        stock: "",
                    },
                },
                footer: {
                    component: ProdModalFooterVue,
                    data: {
                        id: "",
                        stock: "",
                    },
                },
            },
        };
    },
    watch: {
        product: {
            handler: function () {
                this.modalData.body.data.stock = this.product.stock;
                this.modalData.footer.data.stock = this.product.stock;
            },
            deep: true,
        },
    },
    computed: {
        ...mapGetters("products", {
            foods: "getFoods",
            drinks: "getDrinks",
            snacks: "getSnacks",
        }),
        ...mapActions("products", ["fetchFoods", "fetchDrinks", "fetchSnacks"]),
        searchProductById() {
            return (id) => {
                for (let i = 0; i < this.products.total; i++)
                    if (this.products.items[i].id === id) {
                        return this.products.items[i];
                    }
            };
        },
    },
    methods: {
        fetchIfNotLoaded: async function (product) {
            if (product === "FOODS") {
                if (Object.keys(this.foods).length === 0) {
                    console.log("trying dispatch data foods");
                    await this.fetchFoods;
                }
            } else if (product === "DRINKS") {
                if (Object.keys(this.drinks).length === 0) {
                    console.log("trying dispatch data drinks");
                    await this.fetchDrinks;
                }
            } else if (product === "SNACKS") {
                if (Object.keys(this.snacks).length === 0) {
                    console.log("trying dispatch data snacks");
                    await this.fetchSnacks;
                }
            }
        },
        setCategory: async function (product) {
            console.log("trying fetching data");
            await this.fetchIfNotLoaded(product);
            if (product === "FOODS") {
                this.products = this.foods;
                this.currentTitle = this.titles.foods;
            } else if (product === "DRINKS") {
                this.products = this.drinks;
                this.currentTitle = this.titles.drinks;
            } else if (product === "SNACKS") {
                this.products = this.snacks;
                this.currentTitle = this.titles.snacks;
            }
        },
        toggleModalProduct: function (id) {
            this.product = this.searchProductById(id);

            this.modalData.header.data.title = this.product.name;

            this.modalData.body.data.desc = this.product.desc;
            this.modalData.body.data.img = this.product.img;
            this.modalData.body.data.ph = this.product.custom.requestPh;
            this.modalData.body.data.stock = this.product.stock;

            this.modalData.footer.data.id = this.product.id;
            this.modalData.footer.data.stock = this.product.stock;

            console.log(`toggling modal with product id: ${id}`);
            $("#" + this.modalId).modal("toggle");
        },
        wrapAllProducts: async function () {
            await this.fetchIfNotLoaded("FOODS");
            await this.fetchIfNotLoaded("DRINKS");
            await this.fetchIfNotLoaded("SNACKS");

            this.allProducts = new Vue.observable({
                foods: this.foods,
                drinks: this.drinks,
                snacks: this.snacks,
            });
        },
    },
    mounted: async function () {
        console.log("mounted");
        await this.setCategory("FOODS");
    },
};
</script>

<style>
input[type="radio"] {
    display: none;
}
#btn-right-bot {
    position: fixed;
    bottom: 2rem;
    right: 1rem;
    border-radius: 50%;
    display: inline-block;
    width: 50px;
    height: 50px;
}
</style>
