import { shallowMount } from "@vue/test-utils"
import { Range } from "@/components"

describe("Range.vue", () => {
    let wrapper
    beforeEach(() => {
        const propsData = {
            min: 10,
            max: 60,
            value: { min: 10, max: 60 },
        }
        wrapper = shallowMount(Range, { propsData })
    })

    it("renders range when passed", () => {
        expect(wrapper.find(".range__minimum").text()).toMatch("10")
        expect(wrapper.find(".range__maximum").text()).toMatch("60")
    })
})
