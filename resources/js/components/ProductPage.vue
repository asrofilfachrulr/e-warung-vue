<template>
    <div
        class="container-sm mx-auto px-0 position-relative vh-100"
        style="max-width: 600px; max-height: 100vh !important; overflow: hidden"
    >
        <router-link to="/cart">
            <button
                id="btn-right-bot"
                class="btn custom-btn-primary"
                style="border-radius: 100%"
            >
                <svg
                    width="33"
                    height="40"
                    viewBox="0 0 33 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0 1.32848C0 0.976144 0.11414 0.63824 0.317311 0.389102C0.520481 0.139964 0.79604 0 1.08337 0H4.33347C4.57513 8.18648e-05 4.80982 0.0992392 5.00024 0.281703C5.19065 0.464167 5.32585 0.719461 5.38433 1.00699L6.26186 5.31391H31.4176C31.5767 5.31409 31.7338 5.35723 31.8777 5.44025C32.0217 5.52328 32.149 5.64416 32.2505 5.7943C32.3521 5.94445 32.4254 6.12017 32.4653 6.30899C32.5052 6.49781 32.5108 6.6951 32.4815 6.88683L29.2314 28.1425C29.1849 28.4469 29.0532 28.7219 28.8589 28.9198C28.6647 29.1177 28.4201 29.2262 28.1675 29.2265H8.66693C8.41436 29.2262 8.16981 29.1177 7.97555 28.9198C7.78129 28.7219 7.64954 28.4469 7.60307 28.1425L4.35513 6.92669L3.48844 2.65696H1.08337C0.79604 2.65696 0.520481 2.51699 0.317311 2.26785C0.11414 2.01872 0 1.68081 0 1.32848ZM6.72121 7.97087L9.56613 26.5696H27.2683L30.1133 7.97087H6.72121ZM10.8337 29.2265C9.68436 29.2265 8.58213 29.7864 7.76944 30.7829C6.95676 31.7795 6.5002 33.1311 6.5002 34.5404C6.5002 35.9498 6.95676 37.3014 7.76944 38.2979C8.58213 39.2945 9.68436 39.8544 10.8337 39.8544C11.983 39.8544 13.0852 39.2945 13.8979 38.2979C14.7106 37.3014 15.1671 35.9498 15.1671 34.5404C15.1671 33.1311 14.7106 31.7795 13.8979 30.7829C13.0852 29.7864 11.983 29.2265 10.8337 29.2265ZM26.0008 29.2265C24.8515 29.2265 23.7493 29.7864 22.9366 30.7829C22.1239 31.7795 21.6673 33.1311 21.6673 34.5404C21.6673 35.9498 22.1239 37.3014 22.9366 38.2979C23.7493 39.2945 24.8515 39.8544 26.0008 39.8544C27.1501 39.8544 28.2523 39.2945 29.065 38.2979C29.8777 37.3014 30.3343 35.9498 30.3343 34.5404C30.3343 33.1311 29.8777 31.7795 29.065 30.7829C28.2523 29.7864 27.1501 29.2265 26.0008 29.2265ZM10.8337 31.8835C11.4083 31.8835 11.9594 32.1634 12.3658 32.6617C12.7721 33.16 13.0004 33.8358 13.0004 34.5404C13.0004 35.2451 12.7721 35.9209 12.3658 36.4192C11.9594 36.9175 11.4083 37.1974 10.8337 37.1974C10.259 37.1974 9.7079 36.9175 9.30156 36.4192C8.89522 35.9209 8.66693 35.2451 8.66693 34.5404C8.66693 33.8358 8.89522 33.16 9.30156 32.6617C9.7079 32.1634 10.259 31.8835 10.8337 31.8835ZM26.0008 31.8835C26.5755 31.8835 27.1266 32.1634 27.5329 32.6617C27.9393 33.16 28.1675 33.8358 28.1675 34.5404C28.1675 35.2451 27.9393 35.9209 27.5329 36.4192C27.1266 36.9175 26.5755 37.1974 26.0008 37.1974C25.4261 37.1974 24.875 36.9175 24.4687 36.4192C24.0623 35.9209 23.8341 35.2451 23.8341 34.5404C23.8341 33.8358 24.0623 33.16 24.4687 32.6617C24.875 32.1634 25.4261 31.8835 26.0008 31.8835Z"
                        fill="white"
                    />
                </svg>
                <span
                    v-if="cart.total > 0"
                    class="position-absolute translate-middle p-2 bg-danger border border-light rounded-circle"
                    style="top: 13px; right 5px"
                >
                    <span class="visually-hidden">cart content</span>
                </span>
            </button>
        </router-link>
        <div
            id="category-buttons"
            class="container-sm px-0 mt-4 d-flex justify-content-evenly position-sticky top-0"
            style="z-index: 9; height: 90px"
        >
            <input
                id="radio-food"
                type="radio"
                name="product-category"
                checked="true"
            />
            <label
                for="radio-food"
                role="btn"
                id="btn-food"
                class="btn rounded-3"
                @click="setCategory('FOODS')"
                ><span>Makanan</span></label
            >
            <input id="radio-drink" type="radio" name="product-category" />
            <label
                for="radio-drink"
                role="btn"
                id="btn-drink"
                class="btn rounded-3"
                @click="setCategory('DRINKS')"
                ><span>Minuman</span></label
            >
            <input id="radio-snack" type="radio" name="product-category" />
            <label
                for="radio-snack"
                role="btn"
                id="btn-snack"
                class="btn rounded-3"
                @click="setCategory('SNACKS')"
                ><span>Camilan</span></label
            >
        </div>
        <div
            class="container-sm position-relative pb-5"
            style="
                overflow: hidden scroll;
                background-color: var(--clr-gray);
                max-height: calc(100vh - 90px);
                min-height: calc(100vh - 90px);
            "
        >
            <spinner-fullscreen
                :data="spinnerData"
                v-if="isLoading"
            ></spinner-fullscreen>

            <toast :data="toastData"></toast>
            <product-section
                :productType="'tile'"
                :products="products"
                :title="currentTitle"
                @productClicked="toggleModalProduct"
            ></product-section>
            <product-section
                :productType="'row'"
                :products="products"
                :title="currentTitle"
                @productClicked="toggleModalProduct"
            ></product-section>
        </div>
        <centered-modal
            :id="modalId"
            :header="modalData.header"
            :body="modalData.body"
            :footer="modalData.footer"
            :state="modalState"
            @submit-action="handleProductModalSubmit"
        ></centered-modal>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import ProdModalBodyVue from "./ModalComponent/ProductPage/ProdModalBody.vue";
import ProdModalFooterVue from "./ModalComponent/ProductPage/ProdModalFooter.vue";
import ProdModalHeaderVue from "./ModalComponent/ProductPage/ProdModalHeader.vue";
export default {
    data: function () {
        return {
            currentCategoryName: "",
            products: {}, // current product on category
            currentTitle: {},
            product: {}, // selected product on toggling modal
            titles: {
                foods: {
                    tile: "Paling Banyak Dibeli",
                    row: "Semua Makanan",
                },
                drinks: {
                    tile: "Sikat Promo!",
                    row: "Semua Minuman",
                },
                snacks: {
                    tile: "Bikin Gagal Diet",
                    row: "Semua Camilan",
                },
            },
            modalId: "productModal",
            modalData: {
                header: {
                    component: ProdModalHeaderVue,
                    data: {
                        title: "",
                    },
                },
                body: {
                    component: ProdModalBodyVue,
                    data: {
                        img: "",
                        desc: "",
                        ph: "",
                        stock: "",
                        origin: "",
                    },
                },
                footer: {
                    component: ProdModalFooterVue,
                    data: {
                        id: "",
                        stock: "",
                    },
                },
                spinnerData: {
                    message: "",
                },
            },
            toastData: {
                id: "toast-info",
                message: "",
            },
            spinnerData: {
                message: `Memuat ${this.currentCategoryName}...`,
            },
            modalState: false,
            isLoading: false,
        };
    },
    watch: {
        product: {
            handler: function () {
                this.modalData.body.data.stock = this.product.stock;
                this.modalData.footer.data.stock = this.product.stock;
            },
            deep: true,
        },
    },
    computed: {
        ...mapGetters("products", {
            foods: "getFoods",
            foodsSize: "getFoodsSize",

            drinks: "getDrinks",
            drinksSize: "getDrinksSize",

            snacks: "getSnacks",
            snacksSize: "getSnacksSize",
        }),
        ...mapGetters("cart", { cart: "getCart" }),
        searchProductById() {
            return (id) => {
                for (let i = 0; i < this.products.total; i++)
                    if (this.products.items[i].id === id) {
                        return this.products.items[i];
                    }
            };
        },
    },
    methods: {
        ...mapActions("products", [
            "fetchFoods",
            "fetchDrinks",
            "fetchSnacks",
            "rebootStock",
        ]),
        ...mapActions("cart", ["addToCart"]),

        fetchIfNotLoaded: async function (product) {
            this.isLoading = true;

            if (product === "FOODS" && this.foodsSize === 0)
                await this.fetchFoods();
            else if (product === "DRINKS" && this.drinksSize === 0)
                await this.fetchDrinks();
            else if (product === "SNACKS" && this.snacksSize === 0)
                await this.fetchSnacks();

            this.isLoading = false;
        },
        setCategory: async function (product) {
            switch (product) {
                case "FOODS":
                    this.currentCategoryName = "Makanan";
                    break;
                case "DRINKS":
                    this.currentCategoryName = "Minuman";
                    break;
                case "SNACKS":
                    this.currentCategoryName = "Camilan";
                    break;
            }

            this.spinnerData.message = `Memuat ${this.currentCategoryName}...`;
            await this.fetchIfNotLoaded(product);

            if (product === "FOODS") {
                this.products = this.foods;
                this.currentTitle = this.titles.foods;
            } else if (product === "DRINKS") {
                this.products = this.drinks;
                this.currentTitle = this.titles.drinks;
            } else if (product === "SNACKS") {
                this.products = this.snacks;
                this.currentTitle = this.titles.snacks;
            }

            this.$router.push({
                path: "/katalog",
                query: { kategori: this.currentCategoryName.toLowerCase() },
            });
        },
        toggleModalProduct: function (id) {
            this.product = this.searchProductById(id);

            this.modalData.header.data.title = this.product.name;

            this.modalData.body.data.desc = this.product.desc;
            this.modalData.body.data.img = this.product.img;
            this.modalData.body.data.ph = this.product.custom.requestPh;
            this.modalData.body.data.stock = this.product.stock;

            this.modalData.footer.data.id = this.product.id;
            this.modalData.footer.data.stock = this.product.stock;
            this.modalData.footer.data.origin = this.product.origin;

            console.log(`toggling modal with product id: ${id}`);
            this.modalState = !this.modalState;
            $("#" + this.modalId).modal("toggle");
            $("#" + this.modalId).on("hidden.bs.modal", () => {
                this.rebootStock({
                    id,
                });
            });
        },
        async handleProductModalSubmit(data) {
            const payload = {
                id: this.product.id,
                req: data.body.toString(),
                name: this.product.name,
                price: this.product.price - this.product.discount,
                qty: Number(data.footer),
            };
            this.addToCart(payload);
            this.toastData.message = "Berhasil ditambahkan ke keranjang!";
            const toast = new bootstrap.Toast(
                document.getElementById(this.toastData.id),
                { autohide: false }
            );
            await this.showToast(toast);
        },
        showToast(toast) {
            toast.show();
            setTimeout(() => {
                toast.hide();
            }, 3000);
        },
    },
    mounted: async function () {
        console.log("mounted product page");
        this.isLoading = true;
        await this.setCategory("FOODS");
        this.isLoading = false;
    },
};
</script>

<style>
input[type="radio"] {
    display: none;
}
#btn-right-bot {
    position: absolute;
    bottom: 2rem;
    right: 1rem;
    display: inline-block;
    width: 65px;
    height: 65px;
    z-index: 999;
}

#category-buttons {
    padding-block: 1rem;
    background-color: white;
    border-bottom: 1px solid #a4a4a4;
}

#category-buttons label {
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

#category-buttons > * {
    transition: all 75ms ease-in;
    font-weight: 400;
    font-size: 0.97rem;
    color: rgba(255, 255, 255, 0.75);
    position: relative;
    overflow: hidden;
    width: 100px;
    height: 50px;
}

#category-buttons span {
    display: inline-block;
    line-height: 100%;
}

/* #category-buttons > *::before {
    position: absolute;
    width: 60px;
    height: 60px;
    bottom: -95%;
    left: -15%;
    z-index: 0;
}

#category-buttons > #btn-drink::before {
    bottom: -25%;
} */

#btn-food {
    background: linear-gradient(182.29deg, #7583b6 2.19%, #66739f 98.38%);
}

/* #btn-food::before {
    content: url("https://github.com/asrofilfachrulr/e-warung-vue/raw/main/assets-hosting/icon-bg-makanan-tab.png");
} */

#btn-drink {
    background: linear-gradient(178.85deg, #d79068 0.85%, #b57552 98.9%);
}

/* #btn-drink::before {
    content: url("https://github.com/asrofilfachrulr/e-warung-vue/raw/main/assets-hosting/icon-bg-minuman-tab.png");
} */

#btn-snack {
    background: linear-gradient(1.15deg, #17766d 1.1%, #43a39a 99.15%);
}

/* #btn-snack::before {
    content: url("https://github.com/asrofilfachrulr/e-warung-vue/raw/main/assets-hosting/icon-bg-snack-tab.png");
} */

#category-buttons input:checked + label {
    font-weight: 500;
    color: white;
    font-size: 1rem !important;
}
</style>
