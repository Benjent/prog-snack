import albums from "@/db/albums"
import AlbumDetails from "./AlbumDetails.vue"

export default {
    component: AlbumDetails,
    tags: ["autodocs"],
}

export const Default = {
    render: (args, { argTypes }) => ({
        components: { AlbumDetails },
        props: Object.keys(argTypes),
        template: `<AlbumDetails v-bind="$props" />`,
    }),
    args: {
        album: albums.find((album) => album.id === "sweet_smoke_just_a_poke"),
    },
}
