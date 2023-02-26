import { shallowMount } from "@vue/test-utils"
import { SearchBar } from "@/components"
import store from "@/store"

describe("SearchBar.vue", () => {
    let wrapper
    beforeEach(() => {
        const propsData = {}
        wrapper = shallowMount(SearchBar, { propsData, store })
    })

    it("filters matching albums", () => {
        wrapper.find(".searchBar__input").setValue("Sweet Smo")
        expect(wrapper.vm.matchingAlbums.length).toBe(3)
    })

    it("clears search on erase", async () => {
        wrapper.find(".searchBar__input").setValue("Sweet Smoke")
        await wrapper.find(".searchBar__reset").trigger("click")
        expect(wrapper.find(".searchBar__input").value).toBeFalsy()
        expect(wrapper.vm.matchingAlbums.length).toBe(0)
    })
})
