import { shallowMount } from "@vue/test-utils"
import { Histogram } from "@/components"

describe("Histogram.vue", () => {
    let wrapper
    beforeEach(() => {
        const propsData = {
            caption: "caption",
            datasource: [{ label: "1", value: 1 }, { label: "2", value: 2 }, { label: "3", value: 3 }],
        }
        wrapper = shallowMount(Histogram, { propsData })
    })

    it("renders caption when passed", () => {
        expect(wrapper.find(".histogram__caption").text()).toMatch("caption")
    })

    it("renders bar chart", async () => {
        expect(wrapper.find(".histogram__entry:nth-child(2) .histogram__label").text()).toMatch("2")
    })
})