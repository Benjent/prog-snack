import Range from "./Range.vue"

export default {
    component: Range,
}

const Template = ({ min, max }) => ({
    render() {
        return <Range min={min} max={max} />
    },
})

export const Default = Template.bind({})
Default.args = {}

export const Extremum = Template.bind({})
Extremum.args = {
    min: 11,
    max: 22,
}
