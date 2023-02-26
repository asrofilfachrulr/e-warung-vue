<template>
    <div
        class="position-sticky top-0 start-0 d-flex justify-content-center w-100 p-3"
        style="z-index: 999"
    >
        <div
            :id="data.id"
            class="toast align-items-center border-0"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
        >
            <div class="toast-body d-flex justify-content-between">
                <span>{{ data.message }}</span
                ><button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="toast"
                    aria-label="Close"
                ></button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style></style>
