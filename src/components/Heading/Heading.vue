<template>
    <component class="heading title" :class="{ [`title--${level}`]: level, [`text--${color}`]: color }" :is="is">
        <slot />
    </component>
</template>

<script>
export default {
    name: "Heading",
    props: {
        level: {
            type: Number,
            default: 1,
            /** @param {number} value */
            validator(value) {
                return [1, 2, 3].includes(value)
            },
        },
        color: {
            type: String,
            default: "primary",
            /** @param {string} value */
            validator(value) {
                return ["primary", "secondary", "tertiary", "quaternary"].includes(value)
            },
        },
    },
    computed: {
        is() {
            return `h${this.level}`
        },
    },
}
</script>

<style lang="scss" scoped>
@import "@/style/gatherer";
@import "@/style/modules/text";
@import "@/style/modules/title";
</style>
