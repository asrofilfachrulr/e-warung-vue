<template>
    <div class="modal fade" :id="id" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <component
                        :is="header.component"
                        :data="header.data"
                    ></component>
                </div>
                <div class="modal-body" style="padding: 0">
                    <component
                        :is="body.component"
                        :data="body.data"
                    ></component>
                </div>
                <div class="modal-footer">
                    <component
                        :is="footer.component"
                        :data="footer.data"
                    ></component>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            required: true,
        },
        header: {
            type: Object,
            required: true,
        },
        body: {
            type: Object,
            required: true,
        },
        footer: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style></style>
