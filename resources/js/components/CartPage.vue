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
        <div class="container px-3">
            <h2>Keranjang Pesanan</h2>
            <div
                class="container-sm"
                style="max-height: 500px !important; overflow: hidden auto"
            >
                <table class="mt-3 table table-striped h-100">
                    <thead class="table-dark position-sticky" style="top: 0">
                        <tr>
                            <th scope="col">Product</th>
                            <th scope="col">Price</th>
                            <th scope="col">#</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, id) in flatCart" :key="id">
                            <td style="width: 50%">
                                <p class="fw-bolder fs-5">{{ item.name }}</p>
                                <small class="text-muted" style="0.7rem">
                                    {{
                                        item.request
                                            ? item.request
                                            : "tidak custom"
                                    }}
                                    - {{ item.qty }} x {{ item.price }}<br />
                                </small>
                            </td>
                            <td
                                class="fw-bold"
                                style="vertical-align: middle; width: 30%"
                            >
                                {{ item.price * item.qty }}
                            </td>
                            <td
                                class="d-flex flex-wrap pe-0 h-100"
                                style="vertical-align: middle"
                                id="buttons"
                            >
                                <button
                                    class="btn btn-outline-danger w-100 mb-2"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        class="bi bi-bag-dash"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M5.5 10a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"
                                        />
                                        <path
                                            d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"
                                        />
                                    </svg>
                                </button>
                                <button class="btn btn-danger w-100">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        class="bi bi-trash3"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"
                                        />
                                    </svg>
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td class="text-end" colspan="1">Total</td>
                            <th colspan="2" scope="col">
                                Rp. {{ cart.total }}
                            </th>
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
        flatCart() {
            // [{id, ..., req, qty}]
            const flattenCart = [];
            Object.keys(this.cart["products"]).forEach((id) => {
                Object.keys(this.cart["products"][id]["request"]).forEach(
                    (req) => {
                        flattenCart.push({
                            id,
                            ...this.cart["products"][id],
                            request: req,
                            qty: this.cart["products"][id]["request"][req],
                        });
                    }
                );
            });
            return flattenCart;
        },
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
