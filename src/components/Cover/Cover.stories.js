import albums from "@/db/albums"
import Cover from "./Cover.vue"

const album = albums.find((album) => album.id === "sweet_smoke_just_a_poke")

export default {
    component: Cover,
}

const Template = ({ album, size, thumbnail, clickable, bordered, rounded, fade }) => ({
    render() {
        return <Cover album={album} size={size} thumbnail={thumbnail} clickable={clickable} bordered={bordered} rounded={rounded} fade={fade} />
    },
})

export const Default = Template.bind({})
Default.args = {
    album,
}

export const Size = Template.bind({})
Size.args = {
    album,
    size: 200,
}

export const Thumbnail = Template.bind({})
Thumbnail.args = {
    album,
    thumbnail: true,
}

export const Clickable = Template.bind({})
Clickable.args = {
    album,
    clickable: true,
}

export const Bordered = Template.bind({})
Bordered.args = {
    album,
    bordered: true,
}

export const Rounded = Template.bind({})
Rounded.args = {
    album,
    rounded: true,
}

export const Fade = Template.bind({})
Fade.args = {
    album,
    fade: true,
}
