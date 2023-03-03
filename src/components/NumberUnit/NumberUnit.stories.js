import NumberUnit from "./NumberUnit.vue"

export default {
    component: NumberUnit,
}

const Template = ({ number, unit }) => ({
    render() {
        return <NumberUnit number={number} unit={unit} />
    },
})

export const Default = Template.bind({})
Default.args = {
    number: 42,
    unit: "units",
}
