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
                @click="onClickCategory('FOODS')"
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
                @click="onClickCategory('DRINKS')"
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
                @click="onClickCategory('SNACKS')"
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
            products: {},
            currentTitle: {},
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
                        stock: "",
                    },
                },
            },
        };
    },
    computed: {
        ...mapGetters("products", {
            foods: "getFoods",
            drinks: "getDrinks",
            snacks: "getSnacks",
        }),
        ...mapActions("products", ["fetchFoods", "fetchDrinks", "fetchSnacks"]),
    },
    methods: {
        onClickCategory: async function (product) {
            console.log("trying fetching data");
            if (product === "FOODS") {
                if (Object.keys(this.foods).length === 0) {
                    console.log("trying dispatch data foods");
                    await this.fetchFoods;
                }
                this.products = this.foods;
                this.currentTitle = this.titles.foods;
            } else if (product === "DRINKS") {
                if (Object.keys(this.drinks).length === 0) {
                    console.log("trying dispatch data drinks");
                    await this.fetchDrinks;
                }
                this.products = this.drinks;
                this.currentTitle = this.titles.drinks;
            } else if (product === "SNACKS") {
                if (Object.keys(this.snacks).length === 0) {
                    console.log("trying dispatch data snacks");
                    await this.fetchSnacks;
                }
                this.products = this.snacks;
                this.currentTitle = this.titles.snacks;
            }
        },
        toggleModalProduct: function (id) {
            let product = {};
            for (let prod of this.products.items)
                if (prod.id === id) {
                    product = prod;
                    break;
                }

            this.modalData.header.data.title = product.name;

            this.modalData.body.data.desc = product.desc;
            this.modalData.body.data.img = product.img;
            this.modalData.body.data.ph = product.custom.requestPh;
            this.modalData.body.data.stock = product.stock;

            this.modalData.footer.data.stock = product.stock;
            console.log(`toggling modal with product id: ${id}`);
            $("#" + this.modalId).modal("toggle");
        },
    },
    mounted: async function () {
        console.log("mounted");
        await this.fetchFoods;
        this.products = this.foods;
        this.currentTitle = this.titles.foods;
    },
};
</script>

<style>
input[type="radio"] {
    display: none;
}
</style>
