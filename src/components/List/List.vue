<template>
    <component :is="listComponent" class="list">
        <component :is="itemComponent" class="list__item" v-for="(item, index) in values" :key="item">
            {{ filter ? filter(item) : item
            }}<template v-if="type === 'flattened' && index < values.length - 1">{{ separator }}</template>
        </component>
    </component>
</template>

<script>
export default {
    name: "List",
    props: {
        values: {
            type: Array,
        },
        filter: {
            type: Function,
        },
        type: {
            type: String,
            default: "unordered",
            validator(value) {
                return ["ordered", "unordered", "flattened"].includes(value)
            },
        },
        separator: {
            type: String,
            default: ", ",
        },
    },
    computed: {
        listComponent() {
            const mapper = {
                ordered: "ol",
                unordered: "ul",
                flattened: "span",
            }
            return mapper[this.type]
        },
        itemComponent() {
            return this.type === "flattened" ? "span" : "li"
        },
    },
}
</script>

<style lang="scss" scoped>
@import "@/style/gatherer";

.list {
    text-align: left;
    width: fit-content;
}
</style>
