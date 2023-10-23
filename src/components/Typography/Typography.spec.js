import { shallowMount } from "@vue/test-utils"
import Typography from "./Typography.vue"

describe("Typography.vue", () => {
    let wrapper
    beforeEach(() => {
        const propsData = {}
        wrapper = shallowMount(Typography, { propsData })
    })

    it("renders title when passed", () => {
        expect(wrapper.find(".typography").exists()).toBe(true)
    })
})
