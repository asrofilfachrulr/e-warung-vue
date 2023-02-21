<template>
    <div class="container-lg gap-1">
        <div class="row">
            <img
                class="col-2"
                :src="product.img"
                alt=""
                style="width: 100px; height: 100px"
            />
            <p class="col-4">{{ product.name }}</p>
            <p class="col-4">{{ product.price }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        product: Object,
    },
};
</script>

<style></style>
