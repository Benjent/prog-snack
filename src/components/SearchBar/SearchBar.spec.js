import { shallowMount } from "@vue/test-utils"
import { SearchBar } from "@/components"
import store from "@/store"
import albums from "@/db/albums"

describe("SearchBar.vue", () => {
    const album = albums.find((album) => album.id === "sweet_smoke_just_a_poke")
    let wrapper
    beforeEach(() => {
        const propsData = {}
        wrapper = shallowMount(SearchBar, { propsData, store })
    })

    it("filters matching albums", () => {
        wrapper.find(".searchBar__input").setValue("Sweet Smo")
        expect(wrapper.vm.matchingAlbums.length).toBe(3)
        expect(wrapper.vm.matchingAlbums[0]).toEqual(album)
    })

    it("clears search on erase", async () => {
        wrapper.find(".searchBar__input").setValue("Sweet Smoke")
        await wrapper.find(".searchBar__reset").trigger("click")
        expect(wrapper.find(".searchBar__input").value).toBeFalsy()
        expect(wrapper.vm.matchingAlbums.length).toBe(0)
    })
})
