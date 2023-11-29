import Heading from "./Heading.vue"

export default {
    component: Heading,
    tags: ["autodocs"],
}

export const Default = {
    render: (args, { argTypes }) => ({
        components: { Heading },
        props: Object.keys(argTypes),
        template: "<Heading v-bind=\"$props\">{{ level ? `This is a level ${level} heading.` : \"This is a slot.\" }}</Heading>", // eslint-disable-line no-template-curly-in-string
    }),
    args: {},
}

export const Level2 = {
    render: (args, { argTypes }) => ({
        components: { Heading },
        props: Object.keys(argTypes),
        template: "<Heading v-bind=\"$props\">{{ level ? `This is a level ${level} heading.` : \"This is a slot.\" }}</Heading>", // eslint-disable-line no-template-curly-in-string
    }),
    args: {
        level: 2,
    },
}

export const Level3 = {
    render: (args, { argTypes }) => ({
        components: { Heading },
        props: Object.keys(argTypes),
        template: "<Heading v-bind=\"$props\">{{ level ? `This is a level ${level} heading.` : \"This is a slot.\" }}</Heading>", // eslint-disable-line no-template-curly-in-string
    }),
    args: {
        level: 3,
    },
}
