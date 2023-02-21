<template>
    <div>
        <h2
            class="mt-4 mb-3"
            v-if="products.items.length > 0 && productType == 'tile'"
        >
            {{ title.tile }}
        </h2>
        <div class="mb-3 d-flex justify-content-center">
            <div
                class="d-flex flex-wrap justify-content-between"
                style="gap: 1.2rem; max-width: 350px"
                v-if="productType == 'tile'"
            >
                <product-tile
                    v-for="(product, index) in products.items"
                    :product="product"
                    :key="index"
                ></product-tile>
            </div>
        </div>
        <div
            class="d-flex flex-column"
            style="gap: 1rem"
            v-if="productType == 'row'"
        >
            <h2 class="mb-2" v-if="products.items.length > 0">
                {{ title.row }}
            </h2>
            <product-row
                v-for="(product, index) in products.items"
                :product="product"
                :key="index"
            ></product-row>
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
};
</script>

<style></style>
