import TheStorybookModuleWrapper from "@/components/TheStorybookModuleWrapper.vue"

export default {
    component: TheStorybookModuleWrapper,
}

export const Default = {
    render: (args, { argTypes }) => ({
        components: { TheStorybookModuleWrapper },
        props: Object.keys(argTypes),
        template: `
            <TheStorybookModuleWrapper>
                <div v-bind="$props">This is a slot</div>
            </TheStorybookModuleWrapper>
        `,
    }),
    args: {
        class: "card",
    },
}

export const Marginless = {
    render: (args, { argTypes }) => ({
        components: { TheStorybookModuleWrapper },
        props: Object.keys(argTypes),
        template: `
            <TheStorybookModuleWrapper>
                <div v-bind="$props">This is a slot</div>
            </TheStorybookModuleWrapper>
        `,
    }),
    args: {
        class: "card card--marginless",
    },
}
