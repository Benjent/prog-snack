import Check from "./Check.vue"

export default {
    component: Check,
}

const Template = ({ id, label, value }) => ({
    render() {
        return <Check id={id} label={label} value={value} />
    },
})

export const Default = Template.bind({})
Default.args = {
    id: "id",
    label: "label",
    value: false,
}

export const Checked = Template.bind({})
Checked.args = {
    id: "id",
    label: "label",
    value: true,
}
