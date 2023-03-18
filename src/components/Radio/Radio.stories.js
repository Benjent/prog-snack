import Radio from "./Radio.vue"

export default {
    component: Radio,
}

const Template = ({ id, label, value, own }) => ({
    render() {
        return <Radio id={id} label={label} value={value} own={own} />
    },
})

export const Default = Template.bind({})
Default.args = {
    id: "id",
    label: "label",
    value: false,
    own: true,
}

export const Checked = Template.bind({})
Checked.args = {
    id: "id",
    label: "label",
    value: true,
    own: true,
}
