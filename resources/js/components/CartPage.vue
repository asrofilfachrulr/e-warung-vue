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
            <!-- Grid Table Container -->
            <div
                class="container-sm px-3 rounded-1"
                id="grid-table-cart-container"
            >
                <div
                    id="header-table-cart"
                    class="row row-cols-2 fw-bold fs-5 py-2 px-2"
                >
                    <div class="col-8">Product</div>
                    <div class="col-4 text-end">Price</div>
                </div>
                <div class="row sep-shadow"></div>
                <div class="p-0" id="row-table-cart">
                    <div
                        class="row row-cols-2 row-item-cart py-2 px-2"
                        v-for="(item, id) in flatCart"
                        :key="id"
                    >
                        <div class="col-8">
                            <p class="fw-bolder fs-5">{{ item.name }}</p>
                            <small class="text-muted" style="0.7rem">
                                {{ item.request ? item.request + " - " : "" }}
                                {{ item.qty }} x
                                {{ item.price.toLocaleString("id-ID") }}<br />
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
                        </div>
                        <div class="col-4 fw-bold text-end">
                            <span class="my-auto"
                                >Rp.
                                {{
                                    (item.price * item.qty).toLocaleString(
                                        "id-ID"
                                    )
                                }}</span
                            >
                        </div>
                    </div>
                </div>
                <div
                    class="row row-cols-2 py-2 px-2"
                    id="footer-table-cart"
                    :style="`border-top: ${
                        cart.total > 0 ? '2px solid rgb(164, 164, 164)' : 'none'
                    }`"
                >
                    <div class="col-8 text-end">Total &nbsp;</div>
                    <div
                        stsyle="min-width: fit-content"
                        class="col-4 text-end fw-bold price-accent"
                    >
                        Rp. {{ cart.total.toLocaleString("id-ID") }}
                    </div>
                </div>
            </div>
            <!-- Bottom Container -->
            <div
                id="cart-bottom-container"
                class="w-100 position-fixed bottom-0 d-flex justify-content-end flex-column"
                style="height: 150px; background: white; z-index: 99"
            >
                <div class="px-3 py-4">
                    <div class="name-input">
                        <label for="customer-name-input" class="form-label"
                            >Nama Pemesan</label
                        >
                        <input
                            id="customer-name-input"
                            type="text"
                            class="form-control"
                            v-model="orderName"
                            placeholder="Asep Surasep ..."
                        />
                    </div>
                </div>
                <div class="d-flex" style="height: 60px">
                    <button
                        class="rounded-0 btn btn-outline-danger w-100"
                        style="font-size: 0.75rem"
                        @click="clearCart"
                    >
                        Kosongkan<br />Keranjang
                    </button>
                    <button
                        class="rounded-0 btn custom-btn-primary w-100"
                        :disabled="cart.total <= 0"
                        @click="checkoutCart"
                    >
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M2.5 2.5H5V5H2.5V2.5Z" fill="white" />
                            <path
                                d="M7.5 0V7.5H0V0H7.5ZM6.25 1.25H1.25V6.25H6.25V1.25ZM5 15H2.5V17.5H5V15Z"
                                fill="white"
                            />
                            <path
                                d="M7.5 12.5V20H0V12.5H7.5ZM1.25 13.75V18.75H6.25V13.75H1.25ZM15 2.5H17.5V5H15V2.5Z"
                                fill="white"
                            />
                            <path
                                d="M12.5 0V7.5H20V0H12.5ZM18.75 1.25V6.25H13.75V1.25H18.75ZM10 1.25V0H11.25V2.5H10V5H8.75V1.25H10ZM10 7.5V5H11.25V7.5H10ZM7.5 10V8.75H8.75V7.5H10V10H11.25V8.75H17.5V10H12.5V11.25H8.75V10H7.5ZM7.5 10V11.25H2.5V10H1.25V11.25H0V8.75H3.75V10H7.5ZM20 11.25H18.75V8.75H20V11.25ZM18.75 11.25H17.5V13.75H20V12.5H18.75V11.25ZM13.75 11.25H16.25V12.5H15V13.75H13.75V11.25ZM16.25 15V13.75H15V15H13.75V16.25H11.25V17.5H15V15H16.25ZM16.25 15H20V16.25H17.5V17.5H16.25V15ZM11.25 13.75V15H12.5V12.5H8.75V13.75H11.25Z"
                                fill="white"
                            />
                            <path
                                d="M8.75 15H10V18.75H15V20H8.75V15ZM20 17.5V20H16.25V18.75H18.75V17.5H20Z"
                                fill="white"
                            />
                        </svg>
                        &nbsp;Pesan
                    </button>
                </div>
            </div>
        </div>
        <centered-modal
            :header="modalData.header"
            :body="modalData.body"
            :footer="modalData.footer"
            :id="modalId"
            @submit-action="handleSubmit"
        ></centered-modal>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import CheckoutModalBodyVue from "./ModalComponent/Checkout/CheckoutModalBody.vue";
import CheckoutModalFooterVue from "./ModalComponent/Checkout/CheckoutModalFooter.vue";
import CheckoutModalHeaderVue from "./ModalComponent/Checkout/CheckoutModalHeader.vue";
export default {
    data: function () {
        return {
            flatCart: [],
            orderName: "",
            modalId: "checkoutModalId",
            modalData: {
                header: {
                    component: CheckoutModalHeaderVue,
                },
                body: {
                    component: CheckoutModalBodyVue,
                    data: {
                        code: "",
                        date: "",
                    },
                },
                footer: {
                    component: CheckoutModalFooterVue,
                },
            },
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
        ...mapGetters("checkout", { checkoutCounter: "getCounter" }),
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
        ...mapActions("checkout", ["postOrder"]),

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
        clearCart() {
            console.log("invoke clear cart..");

            this.flatCart.forEach((item) => {
                this.removeItem(item);
            });
            console.log("clear cart has been finished");
        },
        async checkoutCart() {
            // post order from checked cart out
            const response = await this.postOrder({
                name: this.orderName || "no-name",
                data: this.flatCart,
                total: this.flatCart.length,
            });

            if (response.status != 201) {
                console.log("ERROR POST ORDER");
                return;
            }

            this.modalData.body.data.code = response.data.orderCode;
            this.modalData.body.data.date = response.data.date;

            console.log(`generating qrcode with id ${response.data.orderCode}`);
            var qr = qrcode(4, "H");
            qr.addData(response.data.orderCode);
            qr.make();
            var svg = qr.createSvgTag(4, 4);
            document.getElementById("qrcode-container").innerHTML = svg;
            document.getElementById(
                "qrcode-container"
            ).children[0].style.transform = "scale(1.25)";

            $("#" + this.modalId).modal("toggle");
        },
        handleSubmit() {
            // clear cart (but no re-stock)
            // go back to home
        },
        // utilities
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

#grid-table-cart-container {
    --table-con-hg: calc(100vh - 70px - 200px);
    min-height: 100px;
    max-height: var(--table-con-hg) !important;
    overflow: hidden;
    background: white;
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
/* 
#header-table-cart {
} */

.sep-shadow {
    border-bottom: 2px solid #a4a4a4;
    height: 0px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    -webkit-box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
}

#row-table-cart {
    max-height: min(calc(var(--table-con-hg) - 90px), 700px) !important;
    overflow: hidden auto;
}

.row-item-cart {
    border-bottom: 1px solid #c5c5c5;
}

.row-item-cart p {
    margin-bottom: 0.25em;
}

#footer-table-cart {
    min-height: 50px !important;
}
</style>
