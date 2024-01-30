import Histogram from "./Histogram.vue"

export default {
    component: Histogram,
    tags: ["autodocs"],
}

export const Default = {
    render: (args, { argTypes }) => ({
        components: { Histogram },
        props: Object.keys(argTypes),
        template: `<div style="width: 800px; height; 600px;">
            <Histogram v-bind="$props" />
        </div>`,
    }),
    args: {
        caption: "Caption",
        datasource: [
            { label: "First label", value: 1 },
            { label: "Second label", value: 20 },
            { label: "Third label", value: 3 },
        ],
    },
}

export const Vertical = {
    render: (args, { argTypes }) => ({
        components: { Histogram },
        props: Object.keys(argTypes),
        template: `<div style="width: 800px; height; 600px;">
            <Histogram v-bind="$props" />
        </div>`,
    }),
    args: {
        caption: "Caption",
        datasource: [
            { label: "First label", value: 1 },
            { label: "Second label", value: 20 },
            { label: "Third label", value: 3 },
        ],
        direction: "vertical",
    },
}

export const Sort = {
    render: (args, { argTypes }) => ({
        components: { Histogram },
        props: Object.keys(argTypes),
        template: `<div style="width: 800px; height; 600px;">
            <Histogram v-bind="$props" />
        </div>`,
    }),
    args: {
        caption: "Caption",
        datasource: [
            { label: "First label", value: 1 },
            { label: "Second label", value: 20 },
            { label: "Third label", value: 3 },
        ],
        sort: "NONE",
    },
}

export const Threshold = {
    render: (args, { argTypes }) => ({
        components: { Histogram },
        props: Object.keys(argTypes),
        template: `<div style="width: 800px; height; 600px;">
            <Histogram v-bind="$props" />
        </div>`,
    }),
    args: {
        caption: "Caption",
        datasource: [
            { label: "First label", value: 1 },
            { label: "Second label", value: 20 },
            { label: "Third label", value: 3 },
        ],
        threshold: 2,
    },
}
