<template>
    <div id="prod-modal-body">
        <img class="img-fluid w-100" :src="data.img" alt="" />
        <div class="px-2">
            <p>{{ data.desc }}</p>
            <div class="input-group">
                <input
                    style="height: initial !important"
                    class="form-control"
                    type="text"
                    v-model="customRequestText"
                    :placeholder="data.ph"
                />
                <button
                    class="btn btn-danger"
                    type="button"
                    id="button-addon2"
                    @click="clearText"
                    style="font-size: 0.9rem"
                >
                    x
                </button>
            </div>

            <small style="float: left">Stok Tersedia: {{ data.stock }}</small>
        </div>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            customRequestText: "",
        };
    },
    props: {
        data: {
            type: Object,
            required: true,
        },
    },
    methods: {
        clearText() {
            this.customRequestText = "";
        },
    },
};
</script>

<style>
#prod-modal-body img {
    max-height: 250px;
    object-fit: cover;
    object-position: center;
}
</style>
