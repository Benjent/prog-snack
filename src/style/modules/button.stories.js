import TheStorybookModuleWrapper from "@/components/TheStorybookModuleWrapper.vue"

export default {
    component: TheStorybookModuleWrapper,
}

const Template = () => ({
    render() {
        return (
            <TheStorybookModuleWrapper>
                <button class="button">This is a title</button>
            </TheStorybookModuleWrapper>
        )
    },
})

export const Default = Template.bind({})
Default.args = {}
