import Check from "./Check.vue"

export default {
    component: Check,
    tags: ["autodocs"],
}

export const Default = {
    render: (args, { argTypes }) => ({
        components: { Check },
        props: Object.keys(argTypes),
        template: `<Check v-bind="$props" />`,
    }),
    args: {
        id: "id",
        label: "This is a label",
        value: false,
    },
}

export const Checked = {
    render: (args, { argTypes }) => ({
        components: { Check },
        props: Object.keys(argTypes),
        template: `<Check v-bind="$props" />`,
    }),
    args: {
        id: "id",
        label: "This is a label",
        value: true,
    },
}
