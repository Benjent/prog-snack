import Accordion from "./Accordion.vue"

export default {
    component: Accordion,
}

const Template = ({ title, drawered }) => ({
    render() {
        return <Accordion title={title} drawered={drawered}>This is a slot.</Accordion>
    },
})

export const Default = Template.bind({})
Default.args = {
    title: "This is a title",
}

export const Drawered = Template.bind({})
Drawered.args = {
    title: "This is a title",
    drawered: true,
}
