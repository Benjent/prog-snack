import {
    beforeEach, describe, expect, it,
} from "vitest"
import { shallowMount } from "@vue/test-utils"
import Heading from "./Heading.vue"

describe("Heading.vue", () => {
    let wrapper
    beforeEach(() => {
        const propsData = { level: 2 }
        wrapper = shallowMount(Heading, { propsData })
    })

    it("renders title when passed", () => {
        expect(wrapper.find(".heading.title--2").exists()).toBe(true)
    })
})
