<template>
    <div
        class="d-flex flex-column justify-content-center align-items-center position-fixed top-0 start-0 h-100 w-100"
        :style="
            'z-index: 9999; background: rgba(30, 30, 30, 0.25); gap: 1.5rem; ' +
            data.style
        "
    >
        <span class="text-light fs-4 fw-bold">{{
            data.message || "Loading..."
        }}</span>
        <div class="spinner-border text-light" role="status"></div>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Object,
            required: false,
        },
    },
};
</script>

<style></style>
