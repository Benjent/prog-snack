import Select from "./Select.vue"

export default {
    component: Select,
    tags: ["autodocs"],
}

export const Default = {
    render: (args, { argTypes }) => ({
        components: { Select },
        props: Object.keys(argTypes),
        template: "<Select v-bind=\"$props\" />",
    }),
    args: {
        options: [1, 2, 3],
    },
}

export const Value = {
    render: (args, { argTypes }) => ({
        components: { Select },
        props: Object.keys(argTypes),
        template: "<Select v-bind=\"$props\" />",
    }),
    args: {
        options: [1, 2, 3],
        value: 2,
    },
}

export const Filter = {
    render: (args, { argTypes }) => ({
        components: { Select },
        props: Object.keys(argTypes),
        template: "<Select v-bind=\"$props\" />",
    }),
    args: {
        options: [1, 2, 3],
        filter: (value) => `This is a filtered value: ${value}`,
    },
}
