import Radio from "./Radio.vue"

export default {
    component: Radio,
    tags: ["autodocs"],
}

export const Default = {
    render: (args, { argTypes }) => ({
        components: { Radio },
        props: Object.keys(argTypes),
        template: "<Radio v-bind=\"$props\" />",
    }),
    args: {
        id: "id",
        label: "This is a label",
        value: false,
        own: true,
    },
}

export const Checked = {
    render: (args, { argTypes }) => ({
        components: { Radio },
        props: Object.keys(argTypes),
        template: "<Radio v-bind=\"$props\" />",
    }),
    args: {
        id: "id",
        label: "This is a label",
        value: true,
        own: true,
    },
}
