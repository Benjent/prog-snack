import List from "./List.vue"

export default {
    component: List,
    tags: ["autodocs"],
}

export const Default = {
    render: (args, { argTypes }) => ({
        components: { List },
        props: Object.keys(argTypes),
        template: "<List v-bind=\"$props\" />",
    }),
    args: {
        values: [1, 2, 3],
    },
}

export const Ordered = {
    render: (args, { argTypes }) => ({
        components: { List },
        props: Object.keys(argTypes),
        template: "<List v-bind=\"$props\" />",
    }),
    args: {
        values: [1, 2, 3],
        type: "ordered",
    },
}

export const Flattened = {
    render: (args, { argTypes }) => ({
        components: { List },
        props: Object.keys(argTypes),
        template: "<List v-bind=\"$props\" />",
    }),
    args: {
        values: [1, 2, 3],
        type: "flattened",
    },
}

export const Separator = {
    render: (args, { argTypes }) => ({
        components: { List },
        props: Object.keys(argTypes),
        template: "<List v-bind=\"$props\" />",
    }),
    args: {
        values: [1, 2, 3],
        type: "flattened",
        separator: " -",
    },
}
