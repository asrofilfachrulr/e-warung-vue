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
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-backspace"
                        viewBox="0 0 16 16"
                    >
                        <path
                            d="M5.83 5.146a.5.5 0 0 0 0 .708L7.975 8l-2.147 2.146a.5.5 0 0 0 .707.708l2.147-2.147 2.146 2.147a.5.5 0 0 0 .707-.708L9.39 8l2.146-2.146a.5.5 0 0 0-.707-.708L8.683 7.293 6.536 5.146a.5.5 0 0 0-.707 0z"
                        />
                        <path
                            d="M13.683 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7.08a2 2 0 0 1-1.519-.698L.241 8.65a1 1 0 0 1 0-1.302L5.084 1.7A2 2 0 0 1 6.603 1h7.08zm-7.08 1a1 1 0 0 0-.76.35L1 8l4.844 5.65a1 1 0 0 0 .759.35h7.08a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-7.08z"
                        />
                    </svg>
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
        state: {
            type: Boolean,
            required: true,
        },
    },
    methods: {
        clearText() {
            this.customRequestText = "";
        },
    },
    watch: {
        customRequestText() {
            this.$emit("data-callback-body", this.customRequestText);
        },
        state() {
            //trigger default every state changes
            console.log("modal state changes");
            this.clearText();
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
