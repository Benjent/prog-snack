import Histogram from "./Histogram.vue"

export default {
    component: Histogram,
}

const Template = ({ caption, datasource, direction, sort, threshold }) => ({
    render() {
        return <Histogram caption={caption} datasource={datasource} direction={direction} sort={sort} threshold={threshold} />
    },
})

export const Default = Template.bind({})
Default.args = {
    caption: "Caption",
    datasource: [{ label: "First label", value: 1 }, { label: "Second label", value: 20 }, { label: "Third label", value: 3 }],
}

export const Vertical = Template.bind({})
Vertical.args = {
    caption: "Caption",
    datasource: [{ label: "First label", value: 1 }, { label: "Second label", value: 20 }, { label: "Third label", value: 3 }],
    direction: "vertical",
}

export const Sort = Template.bind({})
Sort.args = {
    caption: "Caption",
    datasource: [{ label: "First label", value: 1 }, { label: "Second label", value: 20 }, { label: "Third label", value: 3 }],
    sort: "NONE",
}

export const Threshold = Template.bind({})
Threshold.args = {
    caption: "Caption",
    datasource: [{ label: "First label", value: 1 }, { label: "Second label", value: 20 }, { label: "Third label", value: 3 }],
    threshold: 2,
}
