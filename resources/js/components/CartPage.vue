<template>
    <div class="pt-2 pb-5">
        <router-link
            to="/"
            style="text-decoration: none; color: inherit; display: block"
        >
            <div class="d-flex align-items-center mb-4">
                <button class="btn btn-outline-light btn-lg">
                    <svg
                        id="btn-chevron-back"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="black"
                        class="bi bi-chevron-left"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                        />
                    </svg>
                </button>
                <span id="hint-btn-chevron-back">Kembali ke Menu</span>
            </div>
        </router-link>
        <div
            class="container px-3"
            style="max-height: 500px !important; overflow: hidden auto"
        >
            <h2>Keranjang Pesanan</h2>
            <div class="container-sm">
                <table class="mt-3 table table-striped h-100">
                    <thead class="table-dark position-sticky" style="top: 0">
                        <tr>
                            <th scope="col">Product</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, id) in cart.products" :key="id">
                            <td>
                                <p>{{ item.name }}</p>
                                <small
                                    class="text-muted"
                                    v-for="(qty, req) in item.request"
                                    :key="req"
                                    style="0.7rem"
                                >
                                    {{ req ? req + " - " : "" }}{{ qty }} x
                                    {{ item.price }}<br />
                                </small>
                            </td>
                            <td class="fw-bold" style="vertical-align: middle">
                                {{ item.total }}
                            </td>
                        </tr>
                        <tr>
                            <td class="text-end" colspan="1">Total</td>
                            <th scope="col">Rp. {{ cart.total }}</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    computed: {
        ...mapGetters("cart", { cart: "getCart" }),
    },
};
</script>

<style>
#btn-chevron-back {
    width: 24px;
    height: 24px;
}
#hint-btn-chevron-back {
    font-size: 1.25rem;
}
</style>
