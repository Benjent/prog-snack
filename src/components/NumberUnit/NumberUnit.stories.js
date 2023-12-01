import NumberUnit from "./NumberUnit.vue"

export default {
    component: NumberUnit,
    tags: ["autodocs"],
}

export const Default = {
    render: (args, { argTypes }) => ({
        components: { NumberUnit },
        props: Object.keys(argTypes),
        template: `<NumberUnit v-bind="$props" />`,
    }),
    args: {
        number: 42,
        unit: "units",
    },
}
