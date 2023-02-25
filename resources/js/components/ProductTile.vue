<template>
    <div
        id="product-tile"
        class="card"
        style="width: 160px"
        v-if="product.discount != 0"
        @click="handleClick"
    >
        <img :src="product.img" class="card-img-top" alt="..." />
        <div class="card-body">
            <h3 class="card-title">{{ product.name }}</h3>
            <p class="cart-text line">
                <span class="price"
                    >Rp. {{ product.price.toLocaleString("id-ID") }}</span
                >
            </p>
            <p class="card-text fw-bold discount-price price-accent">
                Rp.
                {{ (product.price - product.discount).toLocaleString("id-ID") }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        product: Object,
    },
    mounted() {},
    methods: {
        handleClick() {
            this.$emit("productClicked", this.product.id);
        },
    },
};
</script>

<style>
.card {
    filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.15));
}

#product-tile img {
    width: 100%;
    max-height: 150px;
    object-fit: cover;
    object-position: center;
}

#product-tile .card-title {
    font-weight: 400;
    font-size: 0.9rem;
}

#product-tile .line {
    position: relative;
    display: inline;
}

#product-tile .line::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 75%;
    border-bottom: 3px solid rgba(255, 0, 0, 0.65);
}

#product-tile .price {
    font-size: 0.85rem;
    color: black;
}

#product-tile .discount-price {
    font-size: 1.1rem;
    font-weight: 600;
}
</style>
