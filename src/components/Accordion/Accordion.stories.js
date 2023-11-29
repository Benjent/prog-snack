import Accordion from "./Accordion.vue"

export default {
    component: Accordion,
    tags: ["autodocs"],
}

export const Default = {
    render: (args, { argTypes }) => ({
        components: { Accordion },
        props: Object.keys(argTypes),
        template: "<Accordion v-bind=\"$props\">This is a slot.</Accordion>",
    }),
    args: {
        title: "This is a title",
    },
}

export const Drawered = {
    render: (args, { argTypes }) => ({
        components: { Accordion },
        props: Object.keys(argTypes),
        template: "<Accordion v-bind=\"$props\">This is a slot.</Accordion>",
    }),
    args: {
        title: "This is a title",
        drawered: true,
    },
}
