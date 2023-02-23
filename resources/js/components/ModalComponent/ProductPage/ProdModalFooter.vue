<template>
    <div class="row">
        <div class="col-4">
            <span>Tambahkan ke Keranjang</span>
        </div>
        <div class="col-5">
            <div class="input-group h-100">
                <button
                    class="btn btn-secondary"
                    @click="reduce"
                    v-bind:disabled="qty < 1"
                >
                    -
                </button>
                <input
                    class="h-100 d-block mx-auto text-center form-control"
                    type="number"
                    v-model="qty"
                    :max="data.stock"
                    min="0"
                />
                <button
                    class="btn btn-secondary"
                    @click="add"
                    v-bind:disabled="qty >= data.stock"
                >
                    +
                </button>
            </div>
        </div>
        <div class="col-3 px-0">
            <button
                class="btn btn-primary h-100 w-100"
                style="padding: 0.5em 0.75em"
                @click="reduceStock"
                data-bs-dismiss="modal"
                v-bind:disabled="
                    data.stock <= 0 || qty > data.stock || qty <= 0
                "
            >
                Tambah
            </button>
        </div>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            qty: 0,
        };
    },
    props: {
        data: {
            type: Object,
            required: true,
        },
        state: {
            type: Boolean,
            required: true,
        },
    },
    methods: {
        setDefault() {
            this.qty = this.data.stock >= 0 ? 1 : 0;
        },
        add() {
            this.qty += 1;
        },
        reduce() {
            this.qty -= 1;
        },
        reduceStock: function () {
            console.log(`stock would be modified by ${this.qty}`);
            this.$emit("data-callback-footer", this.qty);
            this.$emit("submit-action");
        },
        isStockEmpty() {
            return this.data.stock <= 0 ? "true" : "false";
        },
    },
    watch: {
        state() {
            //trigger default every state changes
            console.log("modal state changes");
            this.setDefault();
        },
    },
};
</script>

<style></style>
