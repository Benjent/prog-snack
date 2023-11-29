import albums from "@/db/albums"
import AlbumStarter from "./AlbumStarter.vue"

export default {
    component: AlbumStarter,
    tags: ["autodocs"],
}

export const Default = {
    render: (args, { argTypes }) => ({
        components: { AlbumStarter },
        props: Object.keys(argTypes),
        template: "<AlbumStarter v-bind=\"$props\" />",
    }),
    args: {
        album: albums.find((album) => album.id === "sweet_smoke_just_a_poke"),
    },
}
