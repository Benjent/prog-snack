import { shallowMount } from "@vue/test-utils"
import { HistogramHorizontal } from "@/components"

describe("HistogramHorizontal.vue", () => {
    let wrapper
    beforeEach(() => {
        const propsData = {
            caption: "caption",
            datasource: [{ label: "1", data: 1 }, { label: "2", data: 2 }, { label: "3", data: 3 }],
        }
        wrapper = shallowMount(HistogramHorizontal, { propsData })
    })

    it("renders caption when passed", () => {
        expect(wrapper.find(".histogramHorizontal__caption").text()).toMatch("caption")
    })

    it("renders bar chart", () => {
        expect(wrapper.find(".histogramHorizontal__entry:nth-child(2) .histogramHorizontal__label").text()).toMatch("2")
    })
})
