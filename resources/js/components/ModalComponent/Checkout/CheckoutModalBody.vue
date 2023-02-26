<template>
    <div class="px-3 py-2">
        <p>
            Silahkan selesaikan pesanan anda ke kasir dengan menunjukkan kode
            dibawah ini
        </p>
        <div
            class="d-flex flex-column align-items-center mx-auto px-5 py-2"
            id="qrcode-box"
        >
            <svg id="qrcode-container"></svg>
            <p class="m-0">Kode Pesanan</p>
            <small class="text-muted">{{ data.code }}</small>
        </div>
        <small
            class="mt-4 text-end text-muted d-block"
            style="font-size: 0.7rem"
            >{{ data.date }}</small
        >
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

<style>
#qrcode-container {
    max-width: 140px;
}
#qrcode-box {
    min-height: fit-content;
    max-width: fit-content;
    background: #ffffff;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
}
</style>
