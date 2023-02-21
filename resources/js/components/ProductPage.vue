<template>
    <div>
        <h1>Product Page</h1>
        <router-link to="/cart">
            <button class="btn btn-primary">Cart Page</button>
        </router-link>
        <label
            for="radio-food"
            role="btn"
            class="btn btn-primary"
            @click="onClickCategory('FOODS')"
            ><input
                id="radio-food"
                type="radio"
                name="product-category"
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
        <product-section
            v-for="(product, index) in products.items"
            :key="index"
            :product="product"
        ></product-section>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    data: function () {
        return {
            products: {},
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
            } else if (product === "DRINKS") {
                if (Object.keys(this.drinks).length === 0) {
                    console.log("trying dispatch data drinks");
                    await this.fetchDrinks;
                }
                this.products = this.drinks;
            } else if (product === "SNACKS") {
                if (Object.keys(this.snacks).length === 0) {
                    console.log("trying dispatch data snacks");
                    await this.fetchSnacks;
                }
                this.products = this.snacks;
            }
        },
    },
    mounted: async function () {
        console.log("mounted");
        await this.fetchFoods;
        this.products = this.foods;
    },
};
</script>

<style>
input[type="radio"] {
    display: none;
}
</style>
