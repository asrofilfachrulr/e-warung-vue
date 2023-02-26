<template>
    <div
        id="disabled-overlay"
        class="d-flex justify-content-center align-items-center w-100 h-100 position-absolute top-0 start-0"
        :style="data.style"
    >
        <p class="fs-4 fw-bold">{{ data.text }}</p>
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

<style>
#disabled-overlay {
    z-index: 900;
    background-color: rgba(30, 30, 30, 0.45);
    color: white;
    pointer-events: none;
    cursor: not-allowed;
}
</style>
