import albums from "@/db/albums"
import AlbumStarter from "./AlbumStarter.vue"

export default {
    component: AlbumStarter,
}

const Template = ({ album }) => ({
    render() {
        return <AlbumStarter album={album} />
    },
})

export const Default = Template.bind({})
Default.args = {
    album: albums.find((album) => album.id === "sweet_smoke_just_a_poke"),
}
