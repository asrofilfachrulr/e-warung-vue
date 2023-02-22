<template>
    <div class="modal fade" :id="id" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                        Stock Monitor
                    </h1>
                </div>
                <div class="modal-body" style="padding: 0.5rem 1rem">
                    <div class="d-flex justify-content-around mb-3">
                        <button class="btn btn-primary" @click="setFood">
                            Foods
                        </button>
                        <button class="btn btn-primary" @click="setDrink">
                            Drinks
                        </button>
                        <button class="btn btn-primary" @click="setSnack">
                            Snacks
                        </button>
                    </div>
                    <h3>{{ products.title }} Stock</h3>
                    <table class="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Stock</th>
                                <th scope="col">Origin</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="(product, idx) in products.items"
                                :key="idx"
                            >
                                <td>{{ product.name }}</td>
                                <td>{{ product.stock }}</td>
                                <td>{{ product.origin }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="modal-footer">
                    <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            products: {
                title: "",
                items: [],
            },
        };
    },
    props: {
        allProducts: {
            // contain 3 categories
            type: Object,
            required: true,
        },
        id: {
            type: String,
            required: true,
        },
    },
    watch: {
        allProducts: function () {
            console.log("allProduct changes detected");
            this.loadDefault();
        },
    },
    methods: {
        loadDefault() {
            this.setFood();
        },
        setFood() {
            this.products.title = "Makanan";
            this.products.items = this.allProducts.foods.items;
        },
        setDrink() {
            this.products.title = "Minuman";
            this.products.items = this.allProducts.drinks.items;
        },
        setSnack() {
            this.products.title = "Camilan";
            this.products.items = this.allProducts.snacks.items;
        },
    },
};
</script>

<style></style>
