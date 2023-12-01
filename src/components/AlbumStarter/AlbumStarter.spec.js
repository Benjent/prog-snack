import { beforeEach, describe, expect, it } from "vitest"
import { shallowMount } from "@vue/test-utils"
import { AlbumStarter } from "@/components"
import albums from "@/db/albums"

describe("AlbumStarter.vue", () => {
    const album = albums.find((a) => a.id === "sweet_smoke_just_a_poke")
    let wrapper
    beforeEach(() => {
        const propsData = {
            album,
        }
        wrapper = shallowMount(AlbumStarter, { propsData })
    })

    it("renders track title when passed", () => {
        expect(wrapper.find(".albumStarter__sentence").text()).toMatch("Start with the song")
        expect(wrapper.find(".albumStarter__trackTitle").text()).toMatch("Baby Night")
    })
})
