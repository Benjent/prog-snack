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
                <button v-bind="$props">This is a title</button>
            </TheStorybookModuleWrapper>
        `,
    }),
    args: {
        class: "button",
    },
}
