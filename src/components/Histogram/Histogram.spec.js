import { shallowMount } from "@vue/test-utils"
import { Histogram } from "@/components"
import Vue from "vue"

describe("Histogram.vue", () => {
    let wrapper
    beforeEach(() => {
        const propsData = {
            caption: "caption",
            datasource: [{ label: "1", data: 1 }, { label: "2", data: 2 }, { label: "3", data: 3 }],
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
