import TheStorybookModuleWrapper from "@/components/TheStorybookModuleWrapper.vue"

export default {
    component: TheStorybookModuleWrapper,
}

const Template = ({ className }) => ({
    render() {
        return (
            <TheStorybookModuleWrapper>
                <div class={className}>This is a slot</div>
            </TheStorybookModuleWrapper>
        )
    },
})

export const Default = Template.bind({})
Default.args = {
    className: "card",
}

export const Marginless = Template.bind({})
Marginless.args = {
    className: "card card--marginless",
}
