import Typography from "./Typography.vue"

export default {
    component: Typography,
}

const Template = () => ({
    render() {
        return <Typography>This is a text</Typography>
    },
})

export const Default = Template.bind({})
Default.args = {}
