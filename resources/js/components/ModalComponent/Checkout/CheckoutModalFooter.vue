<template>
    <div class="row">
        <small class="col-7 text-muted fst-italic" style="font-size: 0.75rem">
            Jika kode pesanan hilang/tertutup, maka gunakan nama pemesan yang
            anda masukan
        </small>
        <div class="col-5 align-self-center" style="height: fit-content">
            <button
                id="back-to-menu-btn"
                class="btn d-flex align-items-center justify-content-center gap-1 custom-btn-primary w-100"
                @click="closeModal"
            >
                <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1.75061 15.5968V7.34976H2.91718V15.5968C2.91718 15.7651 2.97863 15.9264 3.08802 16.0454C3.19741 16.1644 3.34577 16.2312 3.50046 16.2312H13.9996C14.1543 16.2312 14.3026 16.1644 14.412 16.0454C14.5214 15.9264 14.5829 15.7651 14.5829 15.5968V7.34976H15.7494V15.5968C15.7494 16.1016 15.5651 16.5857 15.2369 16.9426C14.9088 17.2995 14.4637 17.5 13.9996 17.5H3.50046C3.03637 17.5 2.59129 17.2995 2.26313 16.9426C1.93497 16.5857 1.75061 16.1016 1.75061 15.5968ZM14.5829 1.64025V6.08098L12.2497 3.54342V1.64025C12.2497 1.472 12.3112 1.31064 12.4206 1.19167C12.53 1.0727 12.6783 1.00586 12.833 1.00586H13.9996C14.1543 1.00586 14.3026 1.0727 14.412 1.19167C14.5214 1.31064 14.5829 1.472 14.5829 1.64025Z"
                        fill="white"
                    />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.92524 0.371482C8.144 0.133622 8.44067 0 8.75 0C9.05933 0 9.356 0.133622 9.57476 0.371482L17.3289 8.8038C17.4385 8.92292 17.5 9.08448 17.5 9.25294C17.5 9.42141 17.4385 9.58297 17.3289 9.70209C17.2194 9.82121 17.0709 9.88814 16.916 9.88814C16.7611 9.88814 16.6125 9.82121 16.503 9.70209L8.75 1.26851L0.996986 9.70209C0.887461 9.82121 0.738913 9.88814 0.584021 9.88814C0.429129 9.88814 0.280581 9.82121 0.171056 9.70209C0.0615306 9.58297 0 9.42141 0 9.25294C0 9.08448 0.0615306 8.92292 0.171056 8.8038L7.92524 0.371482Z"
                        fill="white"
                    />
                </svg>
                <span>Kembali ke Menu</span>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        closeModal() {
            this.$emit("submit-action");
        },
    },
};
</script>

<style>
#back-to-menu-btn > svg {
    min-width: 18px;
    min-height: 18px;
}
</style>
