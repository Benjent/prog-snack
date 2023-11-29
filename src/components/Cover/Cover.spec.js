import {
    beforeEach, describe, expect, it,
} from "vitest"
import { shallowMount } from "@vue/test-utils"
import { Cover } from "@/components"
import albums from "@/db/albums"

describe("Cover.vue", () => {
    const album = albums.find((a) => a.id === "sweet_smoke_just_a_poke")
    let wrapper
    beforeEach(() => {
        const propsData = {
            album,
            thumbnail: true,
        }
        wrapper = shallowMount(Cover, { propsData })
    })

    it("renders album details when passed", () => {
        expect(wrapper.find(".cover__artist").text()).toMatch("Sweet Smoke")
        expect(wrapper.find(".cover__title").text()).toMatch("Just A Poke")
        expect(wrapper.find(".cover__year").text()).toMatch("1970")
        expect(wrapper.find(".cover__gem").text()).toMatch("This is a must-hear")
        expect(wrapper.find(".cover__album__image").attributes().alt).toMatch("Just A Poke")
    })
})
