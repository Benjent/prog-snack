import albums from "@/db/albums"
import Cover from "./Cover.vue"

const album = albums.find((a) => a.id === "sweet_smoke_just_a_poke")

export default {
    component: Cover,
    tags: ["autodocs"],
}

export const Default = {
    render: (args, { argTypes }) => ({
        components: { Cover },
        props: Object.keys(argTypes),
        template: `<Cover v-bind="$props" />`,
    }),
    args: {
        album,
    },
}

export const Size = {
    render: (args, { argTypes }) => ({
        components: { Cover },
        props: Object.keys(argTypes),
        template: `<Cover v-bind="$props" />`,
    }),
    args: {
        album,
        size: 200,
    },
}

export const Thumbnail = {
    render: (args, { argTypes }) => ({
        components: { Cover },
        props: Object.keys(argTypes),
        template: `<Cover v-bind="$props" />`,
    }),
    args: {
        album,
        thumbnail: true,
    },
}

export const Clickable = {
    render: (args, { argTypes }) => ({
        components: { Cover },
        props: Object.keys(argTypes),
        template: `<Cover v-bind="$props" />`,
    }),
    args: {
        album,
        clickable: true,
    },
}

export const Bordered = {
    render: (args, { argTypes }) => ({
        components: { Cover },
        props: Object.keys(argTypes),
        template: `<Cover v-bind="$props" />`,
    }),
    args: {
        album,
        bordered: true,
    },
}

export const Rounded = {
    render: (args, { argTypes }) => ({
        components: { Cover },
        props: Object.keys(argTypes),
        template: `<Cover v-bind="$props" />`,
    }),
    args: {
        album,
        rounded: true,
    },
}

export const Fade = {
    render: (args, { argTypes }) => ({
        components: { Cover },
        props: Object.keys(argTypes),
        template: `<Cover v-bind="$props" />`,
    }),
    args: {
        album,
        fade: true,
    },
}
