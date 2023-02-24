<template>
    <div
        class="container-fluid px-0 vh-100 pt-2 pb-5"
        style="max-height: 100vh; overflow: hidden"
    >
        <button
            class="btn btn-success position-fixed"
            style="top: 5px; right: 5px"
            @click="generateDummyCartItem"
        >
            Generate
        </button>
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
        <h2 class="px-4">Keranjang Pesanan</h2>
        <div class="container-fluid pt-2 px-0 h-100" id="cart-container">
            <!-- Table Container -->
            <div
                class="container-sm px-3 rounded-5"
                style="
                    max-height: 55%vh !important;
                    overflow: hidden auto;
                    background: white;
                "
            >
                <table class="table table-borderless my-0">
                    <thead
                        class="position-sticky"
                        style="top: 0; background: white"
                    >
                        <tr style="border-bottom: 2px solid #a4a4a4">
                            <th style="width: 70%" scope="col">Product</th>
                            <th style="width: 30%" class="text-end" scope="col">
                                Price
                            </th>
                        </tr>
                    </thead>
                    <tbody style="display: block">
                        <tr v-for="(item, id) in flatCart" :key="id">
                            <td style="width: 70%">
                                <p class="fw-bolder fs-5">{{ item.name }}</p>
                                <small class="text-muted" style="0.7rem">
                                    {{
                                        item.request
                                            ? item.request
                                            : "tidak custom"
                                    }}
                                    - {{ item.qty }} x {{ item.price }}<br />
                                </small>
                                <div
                                    id="buttons-control-container"
                                    class="d-flex justify-content-start mt-2"
                                >
                                    <button
                                        class="btn btn-outline-danger mb-2"
                                        @click="reduceQtyItem(item)"
                                    >
                                        kurangi
                                    </button>
                                    <button
                                        class="btn btn-danger"
                                        @click="removeItem(item)"
                                    >
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
                                </div>
                            </td>
                            <td
                                class="fw-bold text-end"
                                style="vertical-align: middle; width: 30%"
                            >
                                Rp. {{ item.price * item.qty }}
                            </td>
                        </tr>
                    </tbody>
                    <tfoot style="border-top: 2px solid #a4a4a4">
                        <tr>
                            <td style="width: 70%" class="text-end">
                                Total &nbsp;
                            </td>
                            <td style="width: 30%" class="text-end fw-bolder">
                                Rp. {{ cart.total }}
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <!-- Bottom Container -->
            <div
                id="cart-bottom-container"
                class="w-100 position-fixed bottom-0"
                style="height: fit-content; background: white"
            >
                <div class="px-3 py-4">
                    <label for="customer-name-input" class="form-label"
                        >Nama Pemesan</label
                    >
                    <input
                        id="customer-name-input"
                        type="text"
                        class="form-control"
                        placeholder="Asep Surasep"
                    />
                </div>
                <div class="d-flex" style="height: 60px">
                    <button
                        class="rounded-0 btn btn-outline-danger w-100"
                        style="font-size: 0.75rem"
                    >
                        Kosongkan<br />Keranjang
                    </button>
                    <button class="rounded-0 btn custom-btn-primary w-100">
                        Pesan
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
    data: function () {
        return {
            flatCart: [],
        };
    },
    watch: {
        cart: {
            handler: function () {
                console.log("CART HAS BEEN CHANGED");
                this.flatCart = this.flattingCart();
            },
            deep: true,
        },
    },
    computed: {
        ...mapGetters({ cart: "cart/getCart" }),
        ...mapGetters("products", {
            foodsSize: "getFoodsSize",
            drinksSize: "getDrinksSize",
            snacksSize: "getSnacksSize",
        }),
    },
    methods: {
        ...mapActions("cart", ["addToCart", "modifyCart"]),
        ...mapActions("products", [
            "modifyStock",
            "modifyOrigin",
            "fetchFoods",
            "fetchDrinks",
            "fetchSnacks",
        ]),

        // Control Steps
        // 1. modify cart item
        // 2. modify stock
        // 3. modify origin
        reduceQtyItem({ id, request }) {
            console.log(
                `invoke reduce on product: '${id}' with request: '${request}'`
            );

            this.modifyCart({
                id,
                req: request,
                qty: 1, //default is decreasing
            });

            this.modifyStock({
                id,
                number: -1, // modifyStock is decreasing by default, so using negative will do otherwise
            });
            this.modifyOrigin({
                id,
            });
        },
        // remove item can be defined as re-stsock, so just re-add the qty on item to stock again
        removeItem({ id, qty, request }) {
            console.log(
                `invoke remove on product: '${id}' with request: '${request}'`
            );

            this.modifyCart({
                id,
                req: request,
                qty,
            });

            this.modifyStock({
                id,
                number: -1 * qty,
            });
            this.modifyOrigin({
                id,
            });
        },
        flattingCart() {
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
        generateDummyCartItem() {
            console.log("generating dummy cart item");

            // flow of adding cart item
            // reduce stock
            // adjust origin
            // add to cart
            const cartItems = [
                {
                    id: "f-01",
                    req: "pedes",
                    name: "Nasi Ayam Bakar Serundeng",
                    price: 14000,
                    qty: 2,
                },
                {
                    id: "f-01",
                    req: "",
                    name: "Nasi Ayam Bakar Serundeng",
                    price: 14000,
                    qty: 1,
                },
                {
                    id: "f-04",
                    req: "",
                    name: "Nasi Pecel Komplit",
                    price: 12500,
                    qty: 4,
                },
                {
                    id: "f-04",
                    req: "Ga pake peyek, ganti kerupuk ikan aja",
                    name: "Nasi Pecel Komplit",
                    price: 12500,
                    qty: 6,
                },
                {
                    id: "d-07",
                    req: "",
                    name: "Kopi Susu",
                    price: 6000,
                    qty: 4,
                },
            ];

            cartItems.forEach((item) => {
                this.modifyStock({
                    id: item.id,
                    number: item.qty,
                });

                this.modifyOrigin({ id: item.id });

                this.addToCart(item);
            });
            console.log("dummy cart itm generated");
        },
    },
    async mounted() {
        console.log("mounted cart component");
        // ensure all stock information is loaded

        if (this.foodsSize === 0) await this.fetchFoods();
        if (this.drinksSize === 0) await this.fetchDrinks();
        if (this.snacksSize === 0) await this.fetchSnacks();

        this.flatCart = this.flattingCart();
    },
};
</script>

<style>
#cart-container {
    background-color: #f5f5f5;
}

#cart-bottom-container {
    display: none;
}

#btn-chevron-back {
    width: 24px;
    height: 24px;
}
#hint-btn-chevron-back {
    font-size: 1.25rem;
}
#buttons-control-container {
    gap: 1rem;
}
#buttons-control-container > * {
    width: fit-content;
    height: 40px;
}

table tbody tr {
    border-bottom: 1px solid #a4a4a4;
}

table tbody tr:last-of-type {
    border-bottom: none;
}

tbody {
    display: block;
    max-height: min(70vh, 700px);
    overflow: auto;
}
thead,
tbody,
tfoot tr {
    display: table;
    width: 100%;
    table-layout: fixed; /* even columns width , fix width of table too*/
}
</style>
