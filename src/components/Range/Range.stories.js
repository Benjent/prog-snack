import Range from "./Range.vue"

export default {
    component: Range,
    tags: ["autodocs"],
}

export const Default = {
    render: (args, { argTypes }) => ({
        components: { Range },
        props: Object.keys(argTypes),
        template: `<Range v-bind="$props" />`,
    }),
    args: {},
}

export const Min = {
    render: (args, { argTypes }) => ({
        components: { Range },
        props: Object.keys(argTypes),
        template: `<Range v-bind="$props" />`,
    }),
    args: {
        min: 2,
    },
}

export const Max = {
    render: (args, { argTypes }) => ({
        components: { Range },
        props: Object.keys(argTypes),
        template: `<Range v-bind="$props" />`,
    }),
    args: {
        max: 8,
    },
}

export const Bounded = {
    render: (args, { argTypes }) => ({
        components: { Range },
        props: Object.keys(argTypes),
        template: `<Range v-bind="$props" />`,
    }),
    args: {
        min: 11,
        max: 22,
    },
}
