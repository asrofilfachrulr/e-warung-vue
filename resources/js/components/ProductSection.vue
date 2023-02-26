<template>
    <div>
        <div
            class="mb-5 d-flex flex-column justify-content-between"
            style="gap: 1.5rem"
            v-if="productType == 'tile'"
        >
            <h2 class="my-2">
                {{ title.tile }}
            </h2>
            <div
                class="d-flex flex-wrap justify-content-between mx-auto"
                style="gap: 1.2rem; max-width: 350px; width: fit-content"
                v-if="productType == 'tile'"
            >
                <product-tile
                    v-for="(product, index) in products.items"
                    :product="product"
                    :key="index"
                    @productClicked="triggerToParent"
                ></product-tile>
            </div>
        </div>
        <div class="container-sm" v-else>
            <h2 class="mb-2">
                {{ title.row }}
            </h2>
            <div class="row g-2">
                <product-row
                    v-for="(product, index) in products.items"
                    :product="product"
                    :key="index"
                    @productClicked="triggerToParent"
                ></product-row>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: Object,
        products: Object,
        productType: String,
    },
    methods: {
        triggerToParent(data) {
            this.$emit("productClicked", data);
        },
    },
};
</script>

<style></style>
