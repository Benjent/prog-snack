import { beforeEach, describe, expect, it } from "vitest"
import { shallowMount } from "@vue/test-utils"
import { AlbumDetails } from "@/components"
import albums from "@/db/albums"

describe("AlbumDetails.vue", () => {
    const album = albums.find((a) => a.id === "sweet_smoke_just_a_poke")
    let wrapper
    beforeEach(() => {
        const propsData = {
            album,
        }
        wrapper = shallowMount(AlbumDetails, { propsData })
    })

    it("renders album details when passed", () => {
        // TODO improve expects
        expect(wrapper.find(".albumDetails__gem").text()).toMatch("This is a must-hear")
    })
})
