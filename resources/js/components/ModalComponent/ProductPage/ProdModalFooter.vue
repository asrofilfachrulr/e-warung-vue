<template>
    <div class="row">
        <div class="col-3">
            <span>Tambahkan ke Keranjang</span>
        </div>
        <div class="col-3">
            <input type="number" v-model="qty" :max="data.stock" min="0" />
        </div>
        <div class="col-3">
            <button
                class="btn btn-primary"
                style="padding: 0.5em 0.75em"
                @click="add"
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
import { mapActions } from "vuex";
export default {
    data: function () {
        return {
            qty: this.data.stock >= 0 ? 1 : 0,
        };
    },
    props: {
        data: {
            type: Object,
            required: true,
        },
    },
    methods: {
        ...mapActions("products", ["modifyStock"]),
        add: function () {
            console.log(`stock would be modified by ${this.qty}`);
            this.modifyStock({
                id: this.data.id,
                number: this.qty,
            });
        },
        isStockEmpty() {
            return this.data.stock <= 0 ? "true" : "false";
        },
    },
};
</script>

<style></style>
