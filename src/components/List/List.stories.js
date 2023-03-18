import List from "./List.vue"

export default {
    component: List,
}

const Template = ({ values, type, separator }) => ({
    render() {
        return <List values={values} type={type} separator={separator} />
    },
})

export const Default = Template.bind({})
Default.args = {
    values: [1, 2, 3],
}

export const Ordered = Template.bind({})
Ordered.args = {
    values: [1, 2, 3],
    type: "ordered",
}

export const Flattened = Template.bind({})
Flattened.args = {
    values: [1, 2, 3],
    type: "flattened",
}

export const Separator = Template.bind({})
Separator.args = {
    values: [1, 2, 3],
    type: "flattened",
    separator: " -",
}
