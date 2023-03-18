import Select from "./Select.vue"

export default {
    component: Select,
}

const Template = ({ value, options, custom }) => ({
    render() {
        return <Select value={value} options={options} custom={custom} />
    },
})

export const Default = Template.bind({})
Default.args = {
    options: [1, 2, 3],
}
