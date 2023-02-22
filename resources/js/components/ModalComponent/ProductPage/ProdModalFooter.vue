<template>
    <div class="row">
        <div class="col-3">
            <span>Tambahkan ke Keranjang</span>
        </div>
        <div class="col-3">
            <input type="number" :max="data.stock" min="0" value="1" />
        </div>
        <div class="col-3">
            <button
                class="btn btn-primary"
                style="padding: 0.5em 0.75em"
                @click="add"
                v-bind:disabled="data.stock <= 0"
            >
                Tambah
            </button>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    props: {
        data: {
            type: Object,
            required: true,
        },
    },
    methods: {
        ...mapActions("products", ["modifyStock"]),
        add: function () {
            this.modifyStock({
                id: this.data.id,
                number: 1,
            });
        },
        isStockEmpty() {
            return this.data.stock <= 0 ? "true" : "false";
        },
    },
};
</script>

<style></style>
