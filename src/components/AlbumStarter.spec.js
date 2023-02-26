import { shallowMount } from "@vue/test-utils"
import { AlbumStarter } from "@/components"
import albums from "@/db/albums"

describe("AlbumStarter.vue", () => {
    it("renders track title when passed", () => {
        const propsData = {
            album: albums.find((album) => album.id === "sweet_smoke_just_a_poke"),
        }
        const wrapper = shallowMount(AlbumStarter, { propsData })
        expect(wrapper.find(".albumStarter__sentence").text()).toMatch("Start with the song")
        expect(wrapper.find(".albumStarter__trackTitle").text()).toMatch("Baby Night")
    })
})
