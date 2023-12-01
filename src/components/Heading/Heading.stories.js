import Heading from "./Heading.vue"

export default {
    component: Heading,
    tags: ["autodocs"],
}

export const Default = {
    render: (args, { argTypes }) => ({
        components: { Heading },
        props: Object.keys(argTypes),
        template: `<Heading v-bind="$props">This is a slot.</Heading>`,
    }),
    args: {},
}

export const Level2 = {
    render: (args, { argTypes }) => ({
        components: { Heading },
        props: Object.keys(argTypes),
        template: `<Heading v-bind="$props">This is a slot.</Heading>`,
    }),
    args: {
        level: 2,
    },
}

export const Level3 = {
    render: (args, { argTypes }) => ({
        components: { Heading },
        props: Object.keys(argTypes),
        template: `<Heading v-bind="$props">This is a slot.</Heading>`,
    }),
    args: {
        level: 3,
    },
}
