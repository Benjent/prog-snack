import Icon from "./Icon.vue"

export default {
    component: Icon,
}

const Template = ({ name }) => ({
    render() {
        return <Icon name={name} />
    },
})

export const Default = Template.bind({})
Default.args = {
    name: "about",
}
