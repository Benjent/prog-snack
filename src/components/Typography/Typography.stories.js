import Typography from "./Typography.vue"

export default {
    component: Typography,
    tags: ["autodocs"],
}

export const Default = {
    render: (args, { argTypes }) => ({
        components: { Typography },
        props: Object.keys(argTypes),
        template: "<Typography>This is a text</Typography>",
    }),
    args: {},
}
