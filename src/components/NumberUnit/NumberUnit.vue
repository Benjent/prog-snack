<template>
    <div class="numberUnit">
        <span class="numberUnit__number title title--3">{{ number }}</span>
        <span class="numberUnit__unit"> {{ unit }}</span>
    </div>
</template>

<script>
export default {
    name: "NumberUnit",
    props: {
        number: {
            type: Number,
        },
        unit: {
            type: String,
        },
    },
}
</script>

<style lang="scss" scoped>
@import "@/style/gatherer";
@import "@/style/modules/title";

.numberUnit {
    & &__unit {
        position: relative;
        top: -0.7em;
    }
}
</style>
