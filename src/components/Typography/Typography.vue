<template>
    <component class="typography text text--paragraph" :is="is">
        <slot />
    </component>
</template>

<script>
export default {
    name: "Typography",
    props: {
        component: {
            type: String,
            default: "p",
            validator(value) {
                return ["p", "span"].includes(value)
            },
        },
    },
    computed: {
        is() { return this.component },
    },
}
</script>

<style lang="scss" scoped>
@import '@/style/gatherer';
@import '@/style/modules/text';
</style>
