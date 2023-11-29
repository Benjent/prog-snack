import Icon from "./Icon.vue"

export default {
    component: Icon,
    tags: ["autodocs"],
}

export const Default = {
    render: (args, { argTypes }) => ({
        components: { Icon },
        props: Object.keys(argTypes),
        template: "<Icon v-bind=\"$props\" />",
    }),
    args: {
        name: "about",
    },
}
