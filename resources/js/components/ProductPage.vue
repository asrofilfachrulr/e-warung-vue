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
            ></product-section>
            <product-section
                :productType="'row'"
                :products="products"
                :title="currentTitle"
            ></product-section>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
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
