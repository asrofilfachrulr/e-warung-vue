<template>
    <div class="col-md-6">
        <div
            id="product-row"
            class="card"
            style="max-width: 100%"
            v-if="product.discount == 0"
        >
            <div class="row g-0">
                <div class="col-4 p-2" @click="handleClick">
                    <img class="img-fluid rounded" :src="product.img" />
                </div>
                <div class="col-8">
                    <div class="card-body">
                        <h3 class="card-title" @click="handleClick">
                            {{ product.name }}
                        </h3>
                        <p
                            class="cart-text fw-bold price price-accent"
                            @click="handleClick"
                        >
                            Rp. {{ product.price.toLocaleString("id-ID") }}
                        </p>
                        <button
                            style="padding: 0.5em 0.75em"
                            class="btn custom-btn-primary-outline"
                            @click="customClick"
                        >
                            Tambah
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        product: Object,
    },
    methods: {
        handleClick() {
            this.$emit("productClicked", this.product.id);
        },
        customClick() {
            console.log("click");
        },
    },
};
</script>
<style>
#product-row .card-title {
    font-size: 1rem;
}

#product-row img {
    object-fit: cover;
    width: 120px;
    height: 120px;
}
</style>
